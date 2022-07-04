/* eslint-disable react/jsx-key */
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar } from "../components/Navbar/Navbar";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <SessionProvider session={session}>
        <Navbar />
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default MyApp;
