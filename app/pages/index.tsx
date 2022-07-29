/* eslint-disable react/jsx-key */
import type { NextPage } from "next";
import UploadField from "../components/UploadField/UploadField";
import axios from "axios";
import { extractFiles } from "../src/extractFiles";
import React, { useEffect, useState } from "react";
import Link from "@mui/material/Link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const [error, setError] = useState<string | null>(null);
  const [downloadLink, setDownloadLink] = useState();
  const { data: session } = useSession();

  const createDocuments = async (files: FileList | null) => {
    setError(null);

    if (files) {
      const formData = new FormData();

      let excelFile = null;
      let docxFile = null;

      try {
        const extractedFiles = extractFiles(files);

        excelFile = extractedFiles.excelFile;
        docxFile = extractedFiles.docxFile;
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        }
      }

      if (excelFile && docxFile) {
        formData.append("excelFile", excelFile, excelFile.name);
        formData.append("docxFile", docxFile, docxFile.name);
      }

      const response = await axios.post("/api/files/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setDownloadLink(response.data.downloadLink);
    }
  };

  return (
    <div className="pt-24 flex flex-col space-y-12 items-center bg-orange-50">
      <p className="text-xl mb-12">
        Ganz einfach und schnell hunderte Briefe generieren lassen.
      </p>

      {session?.user ? (
        <>
          {error ? <p className="text-red-600">{error}</p> : null}

          <UploadField uploadHandler={createDocuments} />

          {downloadLink ? <Link href={downloadLink}>Download</Link> : null}
        </>
      ) : (
        <>
          <div>Du musst eingeloggt sein um dieses feature zu nutzen.</div>
          <Link variant="body1" underline="none" href="/api/auth/signin">
            <p className="text-orange-500 text-sm">Jetzt einloggen</p>
          </Link>
        </>
      )}

      <p className="text-xl mb-12 font-bold">Wie funktionierts?</p>
      <div className="grid grid-cols-3 w-2/3 h-96">
        <div className="flex flex-row space-x-2">
          <p className="text-base">
            1: Erstelle eine Excel datei mit mit folgenden Spalten.
          </p>
        </div>

        <div className="flex flex-row space-x-2">
          <p className="text-base">
            2: Erstelle eine Word Datei mit den Spalten.
          </p>
        </div>

        <div className="flex flex-row space-x-2">
          <p className="text-base">
            3: Lade beide Dateien hoch und drücke auf herunterladen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
