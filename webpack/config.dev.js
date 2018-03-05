const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./config.common");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  entry: [
    "webpack-hot-middleware/client",
    "./src/index.js"
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});