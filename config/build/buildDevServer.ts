import { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOption } from "./type/config";

export const buildDevServer = ({
  port,
  open,
}: BuildOption): DevServerConfiguration => {
  return {
    port,
    open,
    hot: true,
    historyApiFallback: true,
  };
};
