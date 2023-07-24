import { RuleSetRule } from 'webpack'
import { scssLoader } from './loader/scssLoader'
import { svgLoader } from './loader/svgLoader'
import { babelLoader } from './loader/babelLoader'

const typescriptLoader = {
  test: /\.tsx?$/,
  use: 'ts-loader',
  exclude: /node_modules/,
}

const imgLoader = {
  test: /\.(png|jpe?g|gif)$/i,
  type: 'asset/resource',
}

export const buildLoader = (isDev: boolean): RuleSetRule[] => [
  imgLoader,
  svgLoader,
  babelLoader,
  typescriptLoader,
  scssLoader(isDev),
]
