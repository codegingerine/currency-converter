var HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./app/src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "docs"),
  },
  devServer: {
    contentBase: "./docs",
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      Utils: path.resolve(__dirname, "app/utils"),
      Components: path.resolve(__dirname, "app/src/Components"),
      View: path.resolve(__dirname, "app/src/View"),
      Assets: path.resolve(__dirname, "app/src/assets"),
      Styles: path.resolve(__dirname, "app/src/styles")
    },
  },
  plugins: [new HtmlWebpackPlugin({ template: "public/index.html" })],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
};
