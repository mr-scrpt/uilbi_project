import { HTMLAttributes } from "react";

export interface IconProps extends HTMLAttributes<HTMLSpanElement>{
  icon: string;
  classIcon?: string;
}
