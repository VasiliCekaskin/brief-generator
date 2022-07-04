import Link from "@mui/material/Link";
import { GiLetterBomb } from "react-icons/gi";
import { useSession, signOut } from "next-auth/react";

/* eslint-disable react/jsx-key */
export const Navbar = () => {
  const { data: session } = useSession();

  return (
    <>
      {session && session.user ? (
        <div className="w-full bg-green-300 text-center">
          <p>Logged in as {session.user.name}</p>
        </div>
      ) : (
        <div className="w-full bg-red-300 text-center">
          <p>You are not logged in</p>
        </div>
      )}
      <div className="grid grid-cols-3 p-3 align-middle border-b-4">
        <Link underline="none" className="text-black" href="/">
          <div className="flex flex-row space-x-2 items-center">
            <GiLetterBomb size={48} className="fill-orange-500" />
            <p className="text-2xl font-bold text-black">Briefgenerator</p>
          </div>
        </Link>

        <div className="flex flex-row space-x-2 items-center">
          <GiLetterBomb size={52} className="fill-orange-500" />
          <p className="text-4xl font-bold self-center">
            Online Briefgenerator
          </p>
        </div>

        {session && session.user ? (
          <div className="flex flex-row space-x-6 items-center justify-end w-full pr-4">
            <button
              type="button"
              className="hover:text-gray-400 transition duration-200"
              onClick={async () => {
                await signOut();
              }}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex flex-row space-x-6 items-center justify-end w-full pr-4">
            <Link
              className="hover:text-gray-400 transition duration-200"
              underline="none"
              color={"black"}
              href="/api/auth/signin"
            >
              Login
            </Link>

            <Link
              className="border-4 border-orange-500 rounded-full p-2 hover:bg-black hover:text-white hover:border-black transition duration-200"
              variant="body1"
              underline="none"
              href="/users/new"
            >
              <p className="text-orange-500 text-sm">Registrieren</p>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};
