export type BuildMode = 'development' | 'production';

export interface BuildPath {
  entry: string;
  build: string;
  template: string;
  src: string;
}

export interface BuildOption {
  mode: BuildMode;
  paths: BuildPath;
  isDev: boolean;
  port: number;
  open: boolean;
}

export interface BuildEnv {
  mode: BuildMode;
  port: number;
}
