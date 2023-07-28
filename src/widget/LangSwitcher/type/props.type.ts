import { HTMLAttributes } from 'react'
import { LangSwitcherViewEnum } from './view.enum'

export interface LangSwitcherProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  view?: LangSwitcherViewEnum
}
