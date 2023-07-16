import { HTMLAttributes } from "react";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  view?: string;
  size?: string;
  icon?: string;
  iconPosition?: string;
}
