import path from 'node:path';
import { Configuration } from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPath } from './config/build/type/config';

const paths: BuildPath = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  build: path.resolve(__dirname, 'build'),
  template: path.resolve(__dirname, 'public', 'index.html'),
  src: path.resolve(__dirname, 'src'),
};

export default (env: BuildEnv): Configuration => {
  const mode = env.mode || 'development';

  const isDev = mode === 'development';

  const port = env.port || 3000;

  return buildWebpackConfig({
    mode,
    paths,
    isDev,
    port,
    open: false,
  });
};
