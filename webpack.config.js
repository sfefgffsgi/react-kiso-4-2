const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: `${__dirname}/dist`,
    filename: "main.js",
  },
  devServer: {
    static: {
      directory: "./dist",
    },
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    // fallback: {
    //   async_hooks: false,
    //   zlib: false,
    //   querystring: false,
    //   path: false,
    //   crypto: false,
    //   stream: false,
    //   // http: false,
    //   http: require.resolve("stream-http"),
    //   url: false,
    //   util: false,
    //   buffer: false,
    // },
  },
  mode: "development",
  // target: "node",
  module: {
    rules: [
      {
        test: /\.tsx$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "@babel/env",
            [
              "@babel/preset-react",
              {
                runtime: "automatic",
              },
            ],
            "@babel/preset-typescript",
          ],
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
    new MiniCssExtractPlugin({
      filename: "./src/index.css",
    }),
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
};
