import HtmlWebpackPlugin from "html-webpack-plugin";
import { DefinePlugin, ProgressPlugin, WebpackPluginInstance } from "webpack";
import { BuildOption } from "./type/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildPlugin = ({paths, isDev}:BuildOption): WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({
      template: paths.template,
    }),

    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].chunk.css",
    }),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev)
    })
  ];
};
