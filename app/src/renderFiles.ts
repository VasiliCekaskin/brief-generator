// @ts-nocheck
/* eslint-disable import/no-anonymous-default-export */
import { File } from "formidable";
import AdmZip from "adm-zip";
import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";
import fs from "fs";
import excelToJson from "convert-excel-to-json";
import lodash from "lodash";
import { DigitalOceanSpacesClient } from "./digitalOceanClient/digitalOceanClient";
import crypto from "crypto";

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

    admZip.addFile(`brief_${index}.docx`, renderedDocx);
  });

  return admZip;
};

const uploadFilesZip = async (filesZip: AdmZip) => {
  console.log("Uploading file");

  const digitalOceanSpacesClient = new DigitalOceanSpacesClient();

  const { downloadLink } = await digitalOceanSpacesClient.uploadFile({
    fileBuffer: filesZip.toBuffer(),
    fileName: `briefe-${crypto.randomUUID()}.zip`,
  });

  console.log("Done Uploading file");

  return downloadLink;
};

const processFileGeneration = async (excelFile: File, docxFile: File) => {
  const valuesMapping = extractMappingValues(excelFile);
  // @ts-ignore
  const docxTemplate = buildDocxTemplate(docxFile);

  const generatedFilesZip = generateFilesZip(valuesMapping, docxTemplate);

  const downloadLink = await uploadFilesZip(generatedFilesZip);

  return downloadLink;
};

process.on("message", async (msg) => {
  const downloadLink = await processFileGeneration(msg.excelFile, msg.docxFile);

  process.send(downloadLink);
});
