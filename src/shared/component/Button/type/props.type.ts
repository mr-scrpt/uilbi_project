import { ButtonHTMLAttributes, HTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  classButton?: string
  classIcon?: string
  view?: string
  size?: string
  icon?: string
  iconPosition?: string
}
