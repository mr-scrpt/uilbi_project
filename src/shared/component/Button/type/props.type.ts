import { HTMLAttributes } from 'react';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  classButton?: string;
  classIcon?: string;
  view?: string;
  size?: string;
  icon?: string;
  iconPosition?: string;
}
