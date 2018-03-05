const merge = require("webpack-merge");
const common = require("./config.common");

module.exports = merge(common, {
  mode: "production",
  entry: [ 
    "./src/index.js"
  ],
});