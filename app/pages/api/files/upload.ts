/* eslint-disable import/no-anonymous-default-export */
import formidable from "formidable";
import AdmZip from "adm-zip";
import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";
import fs from "fs";
import excelToJson from "convert-excel-to-json";
import lodash from "lodash";
import type { NextApiRequest, NextApiResponse } from "next";
import { DigitalOceanSpacesClient } from "../../../src/digitalOceanClient/digitalOceanClient";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const form = new formidable.IncomingForm();
  const admZip = new AdmZip();

  form.parse(req, async (err, _, files) => {
    if (err) {
      console.log(err);
      return;
    }

    const excelFile = files.excelFile;
    const docxFile = files.docxFile;

    const rawExcelFile = fs.readFileSync(excelFile.filepath.toString());
    const rawDocxFile = fs.readFileSync(docxFile.filepath.toString());

    const mapping = excelToJson({
      source: rawExcelFile,
      header: {
        rows: 1,
      },
      columnToKey: {
        "*": "{{columnHeader}}",
      },
    })["Sheet1"];

    const pizZip = new PizZip(rawDocxFile);

    const doc = new Docxtemplater(pizZip, {
      paragraphLoop: true,
      linebreaks: true,
    });

    mapping.forEach((valuesJson, index) => {
      const buffer = lodash.clone(doc);

      buffer.render(valuesJson);

      const renderedDocx = buffer.getZip().generate({
        type: "nodebuffer",
        // compression: DEFLATE adds a compression step.
        // For a 50MB output document, expect 500ms additional CPU time
        compression: "DEFLATE",
      });

      admZip.addFile(`output_${index}.docx`, renderedDocx);
    });

    const digitalOceanSpacesClient = new DigitalOceanSpacesClient();

    digitalOceanSpacesClient
      .uploadFile({
        file: admZip.toBuffer(),
        fileName: "test-file.zip",
      })
      .then(({ downloadLink }) => {
        res.status(201).json({
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
