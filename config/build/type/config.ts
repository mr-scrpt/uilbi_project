export type BuildMode = "development" | "production";

export interface buildPath {
  entry: string;
  build: string;
  template: string;
}

export interface BuildOption {
  mode: BuildMode;
  paths: buildPath;
  isDev: boolean;
  port: number;
  open: boolean;
}

export interface BuildEnv {
  mode: BuildMode;
  port: number;
}
