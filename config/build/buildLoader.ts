import { RuleSetRule } from 'webpack'
import { scssLoader } from './loader/scssLoader'

const typescriptLoader = {
  test: /\.tsx?$/,
  use: 'ts-loader',
  exclude: /node_modules/,
}

const imgLoader = {
  test: /\.(png|jpe?g|gif)$/i,
  type: 'asset/resource',
}

const svgLoader = {
  test: /\.svg$/i,
  issuer: /\.[jt]sx?$/,
  use: ['@svgr/webpack'],
}

const babelLoader = {
  test: /\.(js|jsx|ts|tsx)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env'],
      plugins: [
        [
          'i18next-extract',
          {
            locales: ['ru', 'en'],
            keyAsDefaultValue: true,
          },
        ],
      ],
    },
  },
}

export const buildLoader = (isDev: boolean): RuleSetRule[] => [
  imgLoader,
  svgLoader,
  babelLoader,
  typescriptLoader,
  scssLoader(isDev),
]
