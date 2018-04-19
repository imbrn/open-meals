const path = require("path");
const CleanPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "..", "dist"),
    publicPath: "/"
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, use: "babel-loader" }]
  },
  plugins: [
    new CleanPlugin(["../dist", "../build"], {
      allowExternal: true
    }),
    new webpack.DefinePlugin({
      GITHUB_PROJECT_LINK: JSON.stringify(
        "https://github.com/bruno02221/open-meals"
      )
    })
  ]
};
