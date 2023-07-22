import webpack from 'webpack'
import { scssLoader } from '../build/loader/scssLoader'
import { appPath } from '../build/type/appPath'

export default ({ config }: { config: webpack.Configuration }) => {
  const buildToLoader = scssLoader(true)

  config.resolve?.modules?.push(appPath.src)
  config.resolve?.extensions?.push('.ts', '.tsx')

  config.module?.rules?.push(buildToLoader)
  return config
}
