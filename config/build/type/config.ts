export type BuildMode = 'development' | 'production'

export interface BuildPath {
  entry: string
  build: string
  template: string
  src: string
}

export interface BuildOption {
  mode: BuildMode
  appPath: BuildPath
  isDev: boolean
  port: number
  open: boolean
  apiURL: string
}

export interface BuildEnv {
  mode: BuildMode
  port: number
  apiURL: string
}
