import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { RuleSetRule } from 'webpack';

const typescriptLoader = {
  test: /\.tsx?$/,
  use: 'ts-loader',
  exclude: /node_modules/,
};

const imgLoader = {
  test: /\.(png|jpe?g|gif)$/i,
  type: 'asset/resource',
};

const svgLoader = {
  test: /\.svg$/i,
  issuer: /\.[jt]sx?$/,
  use: ['@svgr/webpack'],
};

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
};

const scssLoader = (isDev: boolean) => ({
  test: /\.s[ac]ss$/i,
  type: 'javascript/auto',
  use: [
    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        modules: {
          auto: (resourcePath: string) => Boolean(resourcePath.includes('.module.')),
          localIdentName: isDev
            ? '[path][name]_[local]'
            : '[hash:base64:6]',
        },
      },
    },
    'sass-loader',
  ],
});

export const buildLoader = (isDev: boolean): RuleSetRule[] => [
  imgLoader,
  svgLoader,
  babelLoader,
  typescriptLoader,
  scssLoader(isDev),
];
