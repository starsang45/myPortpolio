import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* ✅ Google Search Console Verification Meta Tag */}
        <meta
          name="google-site-verification"
          content="googlea44d2f8200ef0a29.html"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
