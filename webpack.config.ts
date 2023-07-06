import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import path from "node:path";
import { Configuration } from "webpack";
import { BuildEnv, buildPath } from "./config/build/type/config";

const paths: buildPath = {
  entry: path.resolve(__dirname, "src", "index.tsx"),
  build: path.resolve(__dirname, "build"),
  template: path.resolve(__dirname, "public", "index.html"),
};

export default (env: BuildEnv): Configuration => {
  const mode = env.mode || "development";

  const isDev = mode === "development";

  const port = env.port || 3000;

  return buildWebpackConfig({
    mode,
    paths,
    isDev,
    port,
    open: false,
  });
};
