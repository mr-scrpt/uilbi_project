import { RuleSetRule } from 'webpack'

import { babelLoader } from './loader/babelLoader'
import { scssLoader } from './loader/scssLoader'
import { svgLoader } from './loader/svgLoader'

// const typescriptLoader = {
//   test: /\.tsx?$/,
//   use: 'ts-loader',
//   exclude: /node_modules/,
// }

const imgLoader = {
  test: /\.(png|jpe?g|gif)$/i,
  type: 'asset/resource',
}
const codeBabelLoader = babelLoader({ isTsx: false })
const tsxCodeBabelLoader = babelLoader({ isTsx: true })

export const buildLoader = (isDev: boolean): RuleSetRule[] => [
  imgLoader,
  svgLoader,
  // babelLoader,
  codeBabelLoader,
  tsxCodeBabelLoader,
  // typescriptLoader,
  scssLoader(isDev),
]
