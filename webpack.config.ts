import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import path from "node:path";
import { Configuration } from "webpack";
import { buildPath } from "./config/build/type/config";

const paths: buildPath = {
  entry: path.resolve(__dirname, "src", "index.ts"),
  build: path.resolve(__dirname, "build"),
  template: path.resolve(__dirname, "public", "index.html"),
};

const mode = "development";

const isDev = mode === "development";

const config: Configuration = buildWebpackConfig({
  mode: "development",
  paths,
  isDev,
});

export default config;
