/* eslint-disable react/jsx-key */
import Image from "next/image";

type DownloadButtonProps = {
  title: string;
  description: string;
  file: string;
  fileName: string;
};

const DownloadButton = ({
  title,
  description,
  file,
  fileName,
}: DownloadButtonProps) => {
  return (
    <a
      download={fileName}
      href={file}
      className={"flex items-center text-left cursor-pointer"}
    >
      <Image
        width={48}
        height={48}
        src="/icons/download_icon.svg"
        alt="Download Icon"
      />
      <div className="ml-4">
        <p className="text-lg font-bold text-gray-700">{title}</p>
        <p className="text-base max-w-md font-thin text-gray-700">
          {description}
        </p>
      </div>
    </a>
  );
};

export default DownloadButton;
