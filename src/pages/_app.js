import Head from "next/head";
import "../styles/global.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Connor Minielly</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
