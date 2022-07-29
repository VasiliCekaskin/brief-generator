/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from "next";
import User from "../../../src/models/user";
import passwordHash from "password-hash";
import dbClient from "../../../src/db/client";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password, passwordRepeat } = req.body;
  const allowedEmails = ["demo@baris.com", "demo@admin.com"];

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

  if (!allowedEmails.includes(email)) {
    return res.status(422).json({
      errors: [
        {
          name: "email_not_allowed",
        },
      ],
    });
  }

  const hashedPassword = passwordHash.generate(password);

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
