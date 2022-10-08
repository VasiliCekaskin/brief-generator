/* eslint-disable import/no-anonymous-default-export */
import { DateTime } from "luxon";
import type { NextApiRequest, NextApiResponse } from "next";
import dbClient from "../../../../src/db/client";
import EmailVerification from "../../../../src/models/emailVerification";
import User from "../../../../src/models/user";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { verificationHash } = req.query;

  const emailVerification = await dbClient<EmailVerification>(
    "email_verifications"
  )
    .where("verification_hash", verificationHash)
    .first();

  if (emailVerification) {
    await dbClient<EmailVerification>("email_verifications")
      .where("verification_hash", verificationHash)
      .update("verified_at", DateTime.now().toISO());

    await dbClient<User>("users")
      .where("id", emailVerification.user_id)
      .update("email_verified", true);
  } else {
    return res.redirect("/404");
  }

  return res.redirect("/api/auth/signin");
};
