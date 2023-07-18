import { ResolveOptions } from 'webpack';
import { BuildPath } from './type/config';

export const buildResolve = (paths: BuildPath): ResolveOptions => ({
  mainFiles: ['index'],
  extensions: ['.tsx', '.ts', '.js'],
  preferAbsolute: true,
  modules: [paths.src, 'node_modules'],
  alias: {},
});
