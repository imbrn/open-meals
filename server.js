const path = require("path");
const express = require("express");
const chalk = require("chalk");

const PORT = process.env.PORT || 3000;

const app = express();
app.set("port", PORT);

/* Using webpack middleware */
if (process.env.NODE_ENV !== "production") {
  const webpackConfig = require("./webpack/config.dev");
  const webpackCompiler = require("webpack")(webpackConfig);

  app.use(
    require("webpack-dev-middleware")(webpackCompiler, {
      publicPath: webpackConfig.output.publicPath,
      hot: true,
      logLevel: "silent"
    })
  );

  app.use(require("webpack-hot-middleware")(webpackCompiler));
}

/* Routings */
app.use(express.static(path.resolve(__dirname, "dist")));

app.get("/", (req, res) => res.redirect("/search"));

app.get("/*", (req, res) =>
  res.sendFile(path.join(__dirname, "public/index.html"))
);

app.listen(app.get("port"), () => {
  /* eslint-disable no-console */
  console.log();
  console.log(chalk.bold("Application is running"));
  console.log("----------------------");
  console.log(
    "Access it at",
    chalk.bold.green(`http://127.0.0.1:${app.get("port")}`)
  );
  /* eslint-enable no-console */
});
