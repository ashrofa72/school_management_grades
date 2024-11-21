// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Marhey&display=swap"
          rel="stylesheet"
        />
        <style>
          @import
          url(`https://fonts.googleapis.com/css2?family=Almarai:wght@700&family=Marhey:wght@300..700&display=swap`);
        </style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
