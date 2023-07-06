import { Configuration } from "webpack";
import { buildLoader } from "./buildLoader";
import { buildPlugin } from "./buildPlugin";
import { buildResolve } from "./buildResolve";
import { BuildOption } from "./type/config";

export const buildWebpackConfig = (buildOption: BuildOption): Configuration => {
  const { mode, paths } = buildOption;
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
      rules: buildLoader(),
    },
    resolve: buildResolve(),
  };
};
