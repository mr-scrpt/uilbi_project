import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export const scssLoader = (isDev: boolean) => ({
  test: /\.s[ac]ss$/i,
  type: 'javascript/auto',
  use: [
    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        modules: {
          auto: (resourcePath: string) =>
            Boolean(resourcePath.includes('.module.')),
          localIdentName: isDev ? '[path][name]_[local]' : '[hash:base64:6]',
        },
      },
    },
    'sass-loader',
  ],
})
