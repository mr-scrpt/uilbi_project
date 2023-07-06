import { ResolveOptions } from "webpack";

export const buildResolve = (): ResolveOptions => {
  return {
    extensions: [".tsx", ".ts", ".js"],
  };
};
