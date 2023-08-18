import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import {
  DefinePlugin,
  HotModuleReplacementPlugin,
  ProgressPlugin,
  WebpackPluginInstance,
} from 'webpack'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

import { BuildOption } from './type/config'

export const buildPlugin = ({
  appPath,
  isDev,
  apiURL,
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
      __API_URL__: JSON.stringify(apiURL),
    }),
  ]
  // plugins.push(
  //   new BundleAnalyzerPlugin({
  //     openAnalyzer: false,
  //   })
  // )

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
