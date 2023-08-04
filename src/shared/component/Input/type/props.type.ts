import { HTMLAttributes } from 'react'

import { InputSizeEnum } from './size.enum'
import { InputStateEnum } from './state.enum'
import { InputViewEnum } from './view.enum'

export interface InputProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  view?: InputViewEnum
  size?: InputSizeEnum
  state?: InputStateEnum
}
