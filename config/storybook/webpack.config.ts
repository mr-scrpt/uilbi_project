import webpack from 'webpack'
import { scssLoader } from '../build/loader/scssLoader'
import { appPath } from '../build/type/appPath'
import path from 'node:path'
import { svgLoader } from '../build/loader/svgLoader'

export default ({ config }: { config: webpack.Configuration }) => {
  const buildToLoader = scssLoader(true)

  config.resolve?.modules?.push(appPath.src)
  config.resolve?.extensions?.push('.ts', '.tsx')

  config.module?.rules?.push(buildToLoader)

  // config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
  //   if (/svg/.test(rule.test as string)) {
  //     return { ...rule, exclude: /\.svg$/i }
  //   }
  //
  //   return rule
  // })
  //
  // config.module.rules.push({
  //   test: /\.svg$/i,
  //   issuer: /\.[jt]sx?$/,
  //   use: ['@svgr/webpack'],
  // })
  const pathToInlineSvg = path.resolve(
    __dirname,
    '../../src/shared/asset/icon/'
  )
  const rules = config.module.rules

  // modify storybook's file-loader rule to avoid conflicts with svgr
  const fileLoaderRule = rules.find((rule) => rule.test.test('.svg'))
  fileLoaderRule.exclude = pathToInlineSvg

  rules.push(svgLoader)

  return config
}
