/* eslint-disable react/jsx-key */
import { ReactChild } from "react";
import type { IconType } from "react-icons";

type ButtonProps = {
  title: string;
  icon: ReactChild;
  onClick: () => void;
};

const Button = ({ title, icon, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={
        "border-2 border-black rounded-md flex items-center space-x-2 cursor-pointer p-2"
      }
    >
      {icon}
      <p className="text-lg font-bold text-gray-700">{title}</p>
    </button>
  );
};

export default Button;
