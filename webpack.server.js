const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// const nodeExternals = require("webpack-node-externals");
module.exports = {
  entry: {
    server: "./server/index.js",
  },
  output: {
    path: `${__dirname}/dist`,
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
        test: /\.(js|tsx)$/,
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

// const externals = require("webpack-node-externals");

// module.exports = {
//   target: "node", // Since target is node not browser
//   entry: "./server/index.js",
//   mode: "production",
//   output: {
//     path: `${__dirname}/dist`,
//     filename: "server.js",
//   },
//   resolve: {
//     extensions: [".js", ".jsx"],
//   },
//   externals: [externals()], // will not bundle node modules
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//         },
//       },
//     ],
//   },
// };
