import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <title>リサイクルエビス - 高価買取の買取屋さん</title>
        <meta
          name="description"
          content="眠っているお宝、驚きの価格で買い取ります。高価買取なら買取屋さん「エビス」にお任せください！何でも買取対応。"
        />
        <meta
          name="keywords"
          content="recycle, エビス, 眠っているお宝, 買取屋, 高価買取, 何でも買取"
        />
        <meta property="og:title" content="エビス - 高価買取の買取屋さん" />
        <meta
          property="og:description"
          content="眠っているお宝、驚きの価格で買い取ります。高価買取なら買取屋さん「エビス」にお任せください！何でも買取対応。"
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.recycleebisu.com/" />
        {/* Tsukushi A Round Gothic フォントをインポート */}
        <link
          href="https://fonts.googleapis.com/css2?family=Tsukushi+ARound+Gothic&display=swap"
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
