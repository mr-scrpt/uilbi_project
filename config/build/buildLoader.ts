import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { RuleSetRule } from "webpack";

const typescriptLoader = {
  test: /\.tsx?$/,
  use: "ts-loader",
  exclude: /node_modules/,
};

const scssLoader = (isDev: boolean) => ({
  test: /\.s[ac]ss$/i,
  use: [
    isDev ? "style-loader" : MiniCssExtractPlugin.loader,
    {
      loader: "css-loader",
      options: {
        modules: {
          auto: (resourcePath: string) => Boolean(resourcePath.includes('.module.')),
          localIdentName: isDev
            ? "[path][name]_[local]"
            : "[hash:base64:6]",
        },
      },
    },
    "sass-loader",
  ],
});

export const buildLoader = (isDev: boolean): RuleSetRule[] => {
  return [typescriptLoader, scssLoader(isDev)];
};
