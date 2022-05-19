import "dotenv/config";
import express, { response } from "express";
import compression from "compression";
import formidable from "formidable";
import AdmZip from "adm-zip";
import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";
import { DigitalOceanSpacesClient } from "./lib/digitalOceanSpaces/client.js";
import fs from "fs";
import excelToJson from "convert-excel-to-json";

const app = express();
app.use(compression());

app.get("/api", (req, res) => {
  res.send("Hello World from API!");
});

app.post("/generate-documents", (req, res) => {
  return new Promise((resolve, reject) => {
    const form = new formidable.IncomingForm();
    const admZip = new AdmZip();

    form.parse(req, async (err, _, files) => {
      if (err) {
        return;
      }

      const docxFile = files.docxFile;
      const excelFile = files.excelFile;

      const rawDocxFile = fs.readFileSync(docxFile.filepath.toString());
      const rawExcelFile = fs.readFileSync(excelFile.filepath.toString());

      const mapping = excelToJson({
        source: rawExcelFile,
        header: {
          rows: 1,
        },
        columnToKey: {
          "*": "{{columnHeader}}",
        },
      })["Sheet1"];

      mapping.forEach((valuesJson, index) => {
        const pizZip = new PizZip(rawDocxFile);

        const doc = new Docxtemplater(pizZip, {
          paragraphLoop: true,
          linebreaks: true,
        });

        doc.render(valuesJson);

        const renderedDocx = doc.getZip().generate({
          type: "nodebuffer",
          // compression: DEFLATE adds a compression step.
          // For a 50MB output document, expect 500ms additional CPU time
          compression: "DEFLATE",
        });

        admZip.addFile(`output_${index}.docx`, renderedDocx);
      });

      const digitalOceanSpacesClient = new DigitalOceanSpacesClient();

      const { downloadLink } = await digitalOceanSpacesClient.uploadFile(
        admZip.toBuffer(),
        "some-file.zip"
      );

      res.status(200).json({ downloadLink });
    });
  });
});

app.listen(4040, () =>
  console.log("Example app listening on port http://localhost:4040")
);
