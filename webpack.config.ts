import { Configuration } from 'webpack'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { BuildEnv } from './config/build/type/config'
import { appPath } from './config/build/type/appPath'

export default (env: BuildEnv): Configuration => {
  const mode = env.mode || 'development'

  const isDev = mode === 'development'

  const port = env.port || 3000

  return buildWebpackConfig({
    mode,
    appPath,
    isDev,
    port,
    open: false,
  })
}
