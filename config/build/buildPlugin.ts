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
  appPath,
  isDev,
}: BuildOption): WebpackPluginInstance[] => {
  const plugins = [
    new HtmlWebpackPlugin({
      template: appPath.template,
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
  ]

  if (isDev) {
    plugins.push(new HotModuleReplacementPlugin())
    plugins.push(
      new BundleAnalyzerPlugin({
        openAnalyzer: false,
      })
    )
  }

  return plugins
}
