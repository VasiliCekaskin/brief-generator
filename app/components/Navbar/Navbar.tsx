import Link from "@mui/material/Link";
import { GiLetterBomb } from "react-icons/gi";

/* eslint-disable react/jsx-key */
export const Navbar = () => {
  return (
    <div className="grid grid-cols-3 p-3 align-middle border-b-4">
      <Link underline="none" className="text-black" href="/">
        <div className="flex flex-row space-x-2 items-center">
          <GiLetterBomb size={48} className="fill-orange-500" />
          <p className="text-2xl font-bold text-black">Briefgenerator</p>
        </div>
      </Link>

      <div className="flex flex-row space-x-2 items-center">
        <GiLetterBomb size={52} className="fill-orange-500" />
        <p className="text-4xl font-bold self-center">Online Briefgenerator</p>
      </div>

      <div className="flex flex-row space-x-6 items-center justify-end w-full pr-4">
        <Link
          className="hover:text-gray-400 transition duration-200"
          underline="none"
          color={"black"}
          href="/login"
        >
          Login
        </Link>

        <Link
          className="border-4 border-orange-500 rounded-full p-2 hover:bg-black hover:text-white hover:border-black transition duration-200"
          variant="body1"
          underline="none"
          href="/signup"
        >
          <p className="text-orange-500 text-sm">Registrieren</p>
        </Link>
      </div>
    </div>
  );
};
