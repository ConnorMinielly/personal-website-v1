import Head from "next/head";
import "../styles/global.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Connor Minielly</title>
        <link rel="icon" href="/icon.png" />
        <script
          data-ad-client="ca-pub-5049888940124996"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
