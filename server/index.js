import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../src/app.tsx";

const PORT = process.env.PORT || 9000;
const app = express();

app.get("/", (req, res) => {
  // AppコンポーネントをHTML文字列に変換
  const app = ReactDOMServer.renderToString(<App />);

  // HTMLに変換されたAppコンポーネントを埋め込んだHTMLを作成
  const html = `
        <html lang="ja">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="狐の画像をランダムに表示するサイトです" />
          <title>狐画像</title>
        </head>
        <body>
            <div id="root">${app}</div>
            <script src="./main.js"></script>
        </body>
        </html>
    `;

  // コンポーネントが埋め込まれたHTMLをレスポンス
  res.send(html);
});

app.use(express.static("./build"));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
