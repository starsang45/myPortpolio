import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* ✅ Google Analytics 4 (GA4) Tracking Code */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-QBXB69MXE7"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-QBXB69MXE7');
            `,
          }}
        />
        {/* ✅ Google Search Console Verification Meta Tag */}
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
