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
      <Button
        startIcon={<AiOutlineCloudUpload size={32} />}
        className="rounded-full p-6 pr-48 pl-48 bg-orange-500 hover:bg-orange-400 text-base font-bold"
        size="large"
        variant="contained"
        component="span"
      >
        Dateien auswählen
      </Button>
    </label>
  );
}

export default UploadField;
