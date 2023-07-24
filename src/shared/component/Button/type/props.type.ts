import { ButtonHTMLAttributes, HTMLAttributes } from 'react'
import { ButtonViewEnum } from './view.enum'
import { ButtonSizeEnum } from './size.enum'
import { IconPositionEnum } from './iconPosition.enum'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  classButton?: string
  classIcon?: string
  view?: ButtonViewEnum
  size?: ButtonSizeEnum
  icon?: string
  iconPosition?: IconPositionEnum
}
