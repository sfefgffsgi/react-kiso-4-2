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
  },
  mode: "development",
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
