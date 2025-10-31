import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* ✅ Google Search Console Verification Meta Tag */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-QBXB69MXE7"
        ></script>
        <meta
          name="google-site-verification"
          content="UHnxqwUltwpZxlaN0__q880jlgYnmmxyaTVHWuA8ACQ" 
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
