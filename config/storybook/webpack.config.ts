import webpack from 'webpack'
import path from 'node:path'

import { scssLoader } from '../build/loader/scssLoader'
import { appPath } from '../build/type/appPath'
import { svgLoader } from '../build/loader/svgLoader'

export default ({ config }: { config: webpack.Configuration }) => {
  const buildToLoader = scssLoader(true)

  config.resolve?.modules?.push(appPath.src)
  config.resolve?.extensions?.push('.ts', '.tsx')

  config.module?.rules?.push(buildToLoader)

  const pathToInlineSvg = path.resolve(
    __dirname,
    '../../src/shared/asset/icon/'
  )
  const rules = config.module?.rules as webpack.RuleSetRule[] | undefined

  // modify storybook's file-loader rule to avoid conflicts with svgr
  const fileLoaderRule = rules?.find((rule) => {
    if (rule && 'test' in rule && rule.test instanceof RegExp) {
      return rule.test.test('.svg')
    }
    return false
  })

  if (fileLoaderRule) {
    fileLoaderRule.exclude = pathToInlineSvg
  }

  rules?.push(svgLoader)

  return config
}