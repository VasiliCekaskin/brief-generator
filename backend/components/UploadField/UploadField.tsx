/* eslint-disable react/jsx-key */
import { AiOutlineCloudUpload } from "react-icons/ai";
import { useRef } from "react";

type UploadFieldProps = {
  uploadHandler: (files: FileList | null) => void;
};

function UploadField({ uploadHandler }: UploadFieldProps) {
  const inputRef = useRef(null);

  const handleClick = () => {
    // @ts-ignore
    inputRef?.current?.click();
  };

  const handleChange = async ({
    target: { files },
  }: {
    target: { files: FileList | null };
  }) => {
    uploadHandler(files);
  };

  return (
    <>
      <label htmlFor="contained-button-file"></label>
      <button
        onClick={handleClick}
        className="rounded-full flex items-center gap-8 p-6 pr-48 pl-48 bg-orange-500 hover:bg-orange-400"
      >
        <AiOutlineCloudUpload size={48} color="white" />
        <p className="text-white text-base font-bold">Dateien auswählen</p>
      </button>
      <input
        style={{ display: "none" }}
        ref={inputRef}
        onChange={handleChange}
        className="hidden"
        accept=".xls,.xlsx,.docx"
        id="contained-button-file"
        multiple
        type="file"
        name="files"
      />
    </>
  );
}

export default UploadField;
