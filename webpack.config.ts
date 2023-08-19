import { Configuration } from 'webpack'

import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { appPath } from './config/build/type/appPath'
import { BuildEnv } from './config/build/type/config'

export default (env: BuildEnv): Configuration => {
  const mode = env.mode || 'development'

  const isDev = mode === 'development'

  const port = env.port || 3000

  const apiURL = env.apiURL || 'http://localhost:8000'

  return buildWebpackConfig({
    mode,
    appPath,
    isDev,
    port,
    open: false,
    apiURL,
  })
}
