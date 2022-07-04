/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import passwordHash from "password-hash";
import { Router } from "next/router";
const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password, passwordRepeat } = req.body;

  const foundUser = await prisma.user.findFirst({ where: { email: email } });

  if (!foundUser) {
    if (password === passwordRepeat) {
      await prisma.user.create({
        data: {
          email,
          passwordDigest: passwordHash.generate(password),
        },
      });
    } else {
      res.status(400);
    }
  }

  res.status(201);
};
