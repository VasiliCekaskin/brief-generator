/* eslint-disable react/jsx-key */
import { useState } from "react";
import Button from "@mui/material/Button";
import { AiOutlineCloudUpload } from "react-icons/ai";
import axios from "axios";

type UploadFieldProps = {
  uploadHandler: (files: FileList | null) => void;
};

function UploadField({ uploadHandler }: UploadFieldProps) {
  const handleChange = async ({
    target: { files },
  }: {
    target: { files: FileList | null };
  }) => {
    uploadHandler(files);
  };

  return (
    <label htmlFor="contained-button-file">
      <input
        onChange={handleChange}
        className="hidden"
        accept=".xls,.xlsx,.docx"
        id="contained-button-file"
        multiple
        type="file"
        name="files"
      />
      <button className="rounded-full flex items-center gap-8 p-6 pr-48 pl-48 bg-orange-500 hover:bg-orange-400">
        <AiOutlineCloudUpload size={48} color="white" />
        <p className="text-white text-base font-bold">Dateien auswählen</p>
      </button>
    </label>
  );
}

export default UploadField;
