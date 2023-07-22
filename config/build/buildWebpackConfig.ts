import { Configuration } from 'webpack'
import { buildDevServer } from './buildDevServer'
import { buildLoader } from './buildLoader'
import { buildPlugin } from './buildPlugin'
import { buildResolve } from './buildResolve'
import { BuildOption } from './type/config'

export const buildWebpackConfig = (buildOption: BuildOption): Configuration => {
  const { mode, appPath, isDev } = buildOption
  return {
    mode,
    entry: appPath.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: appPath.build,
      clean: true,
    },
    plugins: buildPlugin(buildOption),
    module: {
      rules: buildLoader(isDev),
    },
    resolve: buildResolve(appPath),
    devtool: mode === 'development' ? 'inline-source-map' : false,
    devServer: mode === 'development' ? buildDevServer(buildOption) : undefined,
  }
}
