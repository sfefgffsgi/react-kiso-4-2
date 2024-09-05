const path = require("path");
const webpack = require("webpack");
// const nodeExternals = require("webpack-node-externals");
module.exports = {
  entry: {
    server: "./server/index.js",
  },
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "server.js",
  },
  target: "node",
  //   node: {
  //     // Need this when working with express, otherwise the build fails
  //     __dirname: false, // if you don't put this is, __dirname
  //     __filename: false, // and __filename return blank or /
  //   },
  //   externals: [nodeExternals()], // Need this to avoid error when working with Express
  module: {
    rules: [
      {
        test: /\.js/,
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
    ],
  },
};
