import { Configuration } from "webpack";
import { buildDevServer } from "./buildDevServer";
import { buildLoader } from "./buildLoader";
import { buildPlugin } from "./buildPlugin";
import { buildResolve } from "./buildResolve";
import { BuildOption } from "./type/config";

export const buildWebpackConfig = (buildOption: BuildOption): Configuration => {
  const { mode, paths, isDev } = buildOption;
  return {
    mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugin(paths),
    module: {
      rules: buildLoader(isDev),
    },
    resolve: buildResolve(),
    devtool: mode === "development" ? "inline-source-map" : false,
    devServer: mode === "development" ? buildDevServer(buildOption) : undefined,
  };
};
