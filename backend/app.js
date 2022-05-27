import "dotenv/config";
import express, { response } from "express";
import compression from "compression";
import formidable from "formidable";
import AdmZip from "adm-zip";
import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";
import fs from "fs";
import excelToJson from "convert-excel-to-json";
import lodash from "lodash";

const app = express();
app.use(compression());

app.get("/healthz", (req, res) => {
  res.send(200, "OK");
});

app.get("/api/documents/download/file-name", (req, res) => {
  res.sendFile("/generated-documents/file-name.zip", {
    headers: {
      "Content-Type": "application/zip",
      "Content-disposition": "attachment; filename=file-name.zip",
    },
  });
});

app.post("/api/generate-documents", (req, res) => {
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

      fs.writeFileSync("/generated-documents/file-name.zip", admZip.toBuffer());

      res.status(200).json({
        downloadLink:
          "http://localhost.ezwebs.de/api/documents/download/file-name",
      });
    });
  });
});

app.listen(4040, () =>
  console.log("Example app listening on port http://localhost:4040")
);
