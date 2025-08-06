import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => (
  <Html lang="en">
    <Head>
      <meta itemProp="image" content="/images/opengraf/raw-share.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:title" content="Get RAW - Date 100% real people" />
      <meta property="og:description" content="Find new love, not catfish" />
      <meta property="og:url" content="https://raw.app" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/images/opengraf/raw-share.png" />
      <meta property="og:site_name" content="RAW" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
