import HtmlWebpackPlugin from "html-webpack-plugin";
import { ProgressPlugin, WebpackPluginInstance } from "webpack";
import { buildPath } from "./type/config";

export const buildPlugin = (paths: buildPath): WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({
      template: paths.template,
    }),
    new ProgressPlugin(),
  ];
};
