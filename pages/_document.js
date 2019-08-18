import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="en">
        <Head />{" "}
        <Head>
          <title>Framer Next</title>
          <meta name="keywords" content="Framer Next" />
          <meta property="og:article:author" content="Natalie Marleny" />
          <meta property="og:title" content="Framer Next" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://framernext.tech" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <meta
            property="og:description"
            content="A technical showcase of the Framer API implemented with Next.js"
          />
          <meta property="og:image" content="../FramerNext.png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:site" content="@nataliemarleny" />
          <link rel="icon" href="../icons/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
