import { ButtonHTMLAttributes } from 'react'
import { ButtonViewEnum } from './view.enum'
import { ButtonSizeEnum } from './size.enum'
import { IconPositionEnum } from './iconPosition.enum'
import { ButtonShapeEnum } from './shape.enum'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  classButton?: string
  classIcon?: string
  view?: ButtonViewEnum
  size?: ButtonSizeEnum
  shape?: ButtonShapeEnum
  icon?: string
  iconPosition?: IconPositionEnum
}
