import { RuleSetRule } from "webpack";

const typescriptLoader = {
  test: /\.tsx?$/,
  use: "ts-loader",
  exclude: /node_modules/,
};

const scssLoader = {
  test: /\.s[ac]ss$/i,
  use: ["style-loader", "css-loader", "sass-loader"],
};

export const buildLoader = (): RuleSetRule[] => {
  return [typescriptLoader, scssLoader];
};
