/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from "next";
import User from "../../../src/models/user";
import passwordHash from "password-hash";
import dbClient from "../../../src/db/client";

import Mailgun from "mailgun.js";
import formData from "form-data";
import EmailVerification from "../../../src/models/emailVerification";

import crypto from "crypto";
import { DateTime } from "luxon";

const mailgun = new Mailgun(formData);

const mg = mailgun.client({
  username: "info",
  key: process.env.MAILGUN_API_KEY || "",
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password, passwordRepeat } = req.body;

  if (!email || !password || !passwordRepeat) {
    return res.status(422).json({
      errors: [
        {
          name: "not_all_fields_provided",
        },
      ],
    });
  }

  if (password !== passwordRepeat) {
    return res.status(422).json({
      errors: [
        {
          name: "passwords_not_equal",
        },
      ],
    });
  }

  const existingUser = await dbClient<User>("users")
    .where("email", email)
    .first();

  if (existingUser) {
    return res.status(422).json({
      errors: [
        {
          name: "email_already_exists",
        },
      ],
    });
  }

  const hashedPassword = passwordHash.generate(password);

  await dbClient<User>("users").insert({
    email: email,
    passwordHash: hashedPassword,
  });

  const user = await dbClient<User>("users").where("email", email).first();

  if (!user) {
    return res.status(500);
  }

  const verificationHash = crypto
    .createHash("sha256")
    .update(crypto.randomUUID())
    .digest("hex");

  await dbClient<EmailVerification>("email_verifications").insert({
    verification_hash: verificationHash,
    user_id: user.id,
    created_at: DateTime.now().toISO(),
    expires_at: DateTime.now().toISO(),
  });

  mg.messages
    .create("sandboxe0b99a1bf6cb441eb80efdc85fc824e2.mailgun.org", {
      from: "letter-friend@ezwebs.de",
      to: [email],
      subject: "Letter Friend Anmeldung",
      text: "Hallo, willkommen bei deinem letter friend",
      html: `<h1>Account anmeldung verifizieren: </h1><a>http://localhost.letterfriend.ezwebs.de/api/users/verification/${verificationHash}</a>`,
    })
    .then((msg) => console.log(msg)) // logs response data
    .catch((err) => console.error(err)); // logs any error

  return res.status(201).json({
    data: {
      user: {
        email: email,
      },
    },
  });
};
