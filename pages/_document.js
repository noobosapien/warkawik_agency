import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="dark:bg-slate-900 dark:text-slate-200">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
