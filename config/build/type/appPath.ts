import path from 'node:path'
import { BuildPath } from './config'

const ASSET_PATH = process.cwd() || '/'

export const appPath: BuildPath = {
  entry: path.resolve(ASSET_PATH, 'src', 'index.tsx'),
  build: path.resolve(ASSET_PATH, 'build'),
  template: path.resolve(ASSET_PATH, 'public', 'index.html'),
  src: path.resolve(ASSET_PATH, 'src'),
}
