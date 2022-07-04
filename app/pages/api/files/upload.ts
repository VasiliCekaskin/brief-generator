/* eslint-disable import/no-anonymous-default-export */
import { IncomingForm, File } from "formidable";
import AdmZip from "adm-zip";
import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";
import fs from "fs";
import excelToJson from "convert-excel-to-json";
import lodash from "lodash";
import type { NextApiRequest, NextApiResponse } from "next";
import { DigitalOceanSpacesClient } from "../../../src/digitalOceanClient/digitalOceanClient";

const extractMappingValues = (excelFile: File) => {
  const rawExcelFileData = fs.readFileSync(excelFile.filepath.toString());

  return excelToJson({
    source: rawExcelFileData,
    header: {
      rows: 1,
    },
    columnToKey: {
      "*": "{{columnHeader}}",
    },
  })["Sheet1"];
};

const buildDocxTemplate = (docxFile: File) => {
  const rawDocxFileData = fs.readFileSync(docxFile.filepath.toString());

  const pizZip = new PizZip(rawDocxFileData);

  return new Docxtemplater(pizZip, {
    paragraphLoop: true,
    linebreaks: true,
  });
};

const generateFilesZip = (
  valuesMapping: any[],
  docxTemplate: Docxtemplater
) => {
  const admZip = new AdmZip();

  valuesMapping.forEach((valuesJson, index) => {
    console.log(`Creating files ${index}`);
    const buffer = lodash.clone(docxTemplate);

    buffer.render(valuesJson);

    const renderedDocx = buffer.getZip().generate({
      type: "nodebuffer",
      // compression: DEFLATE adds a compression step.
      // For a 50MB output document, expect 500ms additional CPU time
      compression: "DEFLATE",
    });

    admZip.addFile(`output_${index}.docx`, renderedDocx);
  });

  return admZip;
};

const uploadFilesZip = async (filesZip: AdmZip) => {
  console.log("Uploading file");

  const digitalOceanSpacesClient = new DigitalOceanSpacesClient();

  const { downloadLink } = await digitalOceanSpacesClient.uploadFile({
    fileBuffer: filesZip.toBuffer(),
    fileName: "test-file.zip",
  });

  console.log("Done Uploading file");

  return downloadLink;
};

const processFileGeneration = (excelFile: File, docxFile: File) => {
  const valuesMapping = extractMappingValues(excelFile);
  // @ts-ignore
  const docxTemplate = buildDocxTemplate(docxFile);

  const generatedFilesZip = generateFilesZip(valuesMapping, docxTemplate);

  const downloadLink = uploadFilesZip(generatedFilesZip);

  return downloadLink;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const form = new IncomingForm();

  form.parse(req, async (err, _, files) => {
    if (err) {
      console.log(err);
      return;
    }

    const excelFile = files.excelFile;
    const docxFile = files.docxFile;

    // @ts-ignore
    const downloadLink = processFileGeneration(excelFile, docxFile);

    res.status(201).json({
      downloadLink,
    });
  });
};

export const config = {
  api: {
    bodyParser: false,
  },
};
