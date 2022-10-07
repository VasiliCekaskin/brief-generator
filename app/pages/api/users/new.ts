/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from "next";
import User from "../../../src/models/user";
import passwordHash from "password-hash";
import dbClient from "../../../src/db/client";

import Mailgun from "mailgun.js";
import formData from "form-data";

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

  const hashedPassword = passwordHash.generate(password);

  mg.messages
    .create("sandboxe0b99a1bf6cb441eb80efdc85fc824e2.mailgun.org", {
      from: "letter-friend@ezwebs.de",
      to: [email],
      subject: "Hello",
      text: "Testing some Mailgun awesomness!",
      html: "<h1>Testing some Mailgun awesomness!</h1>",
    })
    .then((msg) => console.log(msg)) // logs response data
    .catch((err) => console.error(err)); // logs any error

  await dbClient<User>("users").insert({
    email: email,
    passwordHash: hashedPassword,
  });

  return res.status(201).json({
    data: {
      user: {
        email: email,
      },
    },
  });
};
