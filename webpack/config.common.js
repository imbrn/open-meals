const path = require("path");
const CleanPlugin = require("clean-webpack-plugin");

module.exports = {
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "..", "dist"),
    publicPath: "/"
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: "babel-loader" }
    ]
  },
  plugins: [
    new CleanPlugin(["../dist", "../build"], {
      allowExternal: true
    })
  ]
}