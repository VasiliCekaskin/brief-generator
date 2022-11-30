/* eslint-disable import/no-anonymous-default-export */
import { IncomingForm } from "formidable";
import type { NextApiRequest, NextApiResponse } from "next";
import { fork } from "child_process";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const form = new IncomingForm();

  console.log(req);
  console.log(form);

  form.parse(req, async (err, _, files) => {
    if (err) {
      console.log(err);
      return;
    }

    const forked = fork("./.next/server/renderFiles.js");

    forked.send(files);

    forked.on("message", (downloadLink) => {
      res.status(200).json({
        downloadLink,
      });
    });
  });
};

export const config = {
  api: {
    bodyParser: false,
  },
};
