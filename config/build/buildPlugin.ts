import HtmlWebpackPlugin from "html-webpack-plugin";
import { ProgressPlugin, WebpackPluginInstance } from "webpack";
import { buildPath } from "./type/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildPlugin = (paths: buildPath): WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({
      template: paths.template,
    }),

    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].chunk.css",
    }),
  ];
};
