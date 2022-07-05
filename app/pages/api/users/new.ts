/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from "next";
import User from "../../../src/models/user";
import passwordHash from "password-hash";
import knex from "knex";

const db = knex({
  client: "postgresql",
  connection: {
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "postgres",
    database: "letter-friend",
  },
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

  await db<User>("users").insert({
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
