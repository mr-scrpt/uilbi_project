import { RuleSetRule } from "webpack";

const typescriptLoader = {
  test: /\.tsx?$/,
  use: "ts-loader",
  exclude: /node_modules/,
};

export const buildLoader = (): RuleSetRule[] => {
  return [typescriptLoader];
};
