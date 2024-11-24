import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        {/* Zen Old Minchoフォントをインポート */}
        <link
          href="https://fonts.googleapis.com/css2?family=Zen+Old+Mincho&display=swap"
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
