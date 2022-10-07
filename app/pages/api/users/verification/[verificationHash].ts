/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from "next";
import dbClient from "../../../../src/db/client";
import EmailVerification from "../../../../src/models/emailVerification";
import { DateTime } from "luxon";

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
  } else {
    return res.redirect("/404");
  }

  return res.redirect("/");
};
