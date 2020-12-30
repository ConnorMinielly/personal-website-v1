import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="Description"
            content="Connor Minielly's Personal Website"
          />
          <link rel="icon" href="/icon.png" />
          <link rel="preconnect" href="https://adservice.google.com/" />
          <link rel="preconnect" href="https://googleads.g.doubleclick.net/" />
          <link rel="preconnect" href="https://www.googletagservices.com/" />
          <link rel="preconnect" href="https://tpc.googlesyndication.com/" />
          <script
            data-ad-client="ca-pub-9487519723850650"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
