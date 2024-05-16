import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { Banner } from "@/components/Banner";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Banner />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
