import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { RuleSetRule } from "webpack";

const typescriptLoader = {
  test: /\.tsx?$/,
  use: "ts-loader",
  exclude: /node_modules/,
};

const svgLoader = {
  test: /\.svg$/,
  use: ["@svgr/webpack"],
}

const imgLoader = {
  test: /\.(png|jpe?g|gif)$/i,
  type: 'asset/resource'
}


// const fontLoader = {
//   test: /\.(woff|woff2|eot|ttf|otf)$/i,
//   use: ["file-loader"],
// }

const scssLoader = (isDev: boolean) => ({
  test: /\.s[ac]ss$/i,
  type: 'javascript/auto',
  use: [
    isDev ? "style-loader" : MiniCssExtractPlugin.loader,
    {
      loader: "css-loader",
      options: {
        modules: {
          auto: (resourcePath: string) => Boolean(resourcePath.includes('.module.')),
          localIdentName: isDev
            ? "[path][name]_[local]"
            : "[hash:base64:6]",
        },
      },
    },
    "sass-loader",
  ],
});

export const buildLoader = (isDev: boolean): RuleSetRule[] => {
  return [
    imgLoader,
    typescriptLoader,
    scssLoader(isDev),
    // fontLoader,
    svgLoader,
  ];
};
