import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* PWA primary color */}
          <meta key="theme-color" name="theme-color" content="#F86624" />
          <link key="favicon" rel="icon" href="/favicon.ico" />

          <link
            href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@400;500;600;700&display=swap"
            rel="stylesheet"
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

// https://fonts.google.com/share?selection.family=Libre%20Baskerville:wght@400;700%7CLibre%20Franklin:wght@400;500;600;700
