import { HTMLAttributes } from 'react'

import { TitleSizeEnum } from './size.enum'
import { TitleViewEnum } from './view.enum'

export interface TitleProps extends HTMLAttributes<HTMLSpanElement> {
  className?: string
  view?: TitleViewEnum
  size?: TitleSizeEnum
}
