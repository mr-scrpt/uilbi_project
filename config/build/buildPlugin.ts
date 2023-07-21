import HtmlWebpackPlugin from 'html-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

import {
  DefinePlugin,
  HotModuleReplacementPlugin,
  ProgressPlugin,
  WebpackPluginInstance,
} from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BuildOption } from './type/config'

export const buildPlugin = ({
  paths,
  isDev,
}: BuildOption): WebpackPluginInstance[] => [
  new HtmlWebpackPlugin({
    template: paths.template,
  }),

  new ProgressPlugin(),
  new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash:8].css',
    chunkFilename: 'css/[name].[contenthash:8].chunk.css',
  }),
  new DefinePlugin({
    __IS_DEV__: JSON.stringify(isDev),
  }),
  new HotModuleReplacementPlugin(),
  new BundleAnalyzerPlugin({
    openAnalyzer: false,
  }),
]
