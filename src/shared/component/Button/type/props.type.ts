import { ButtonHTMLAttributes, RefObject } from 'react'
import { IconEnum } from 'shared/component/Icon'

import { ButtonIconPositionEnum } from './buttonIconPosition.enum'
import { ButtonShapeEnum } from './shape.enum'
import { ButtonSizeEnum } from './size.enum'
import { ButtonViewEnum } from './view.enum'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  classButton?: string
  classIcon?: string
  classImg?: string
  view?: ButtonViewEnum
  size?: ButtonSizeEnum
  shape?: ButtonShapeEnum
  icon?: IconEnum
  iconPosition?: ButtonIconPositionEnum
  img?: string
  alt?: string
  // ref?: RefObject<HTMLButtonElement>
}
