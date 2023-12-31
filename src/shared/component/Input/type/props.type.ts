import { HTMLAttributes, InputHTMLAttributes } from 'react'

import { InputModeEnum } from './mode.enum'
import { InputSizeEnum } from './size.enum'
import { InputStateEnum } from './state.enum'
import { InputViewEnum } from './view.enum'

// export interface InputProps extends HTMLAttributes<HTMLDivElement> {
//   className?: string
//   name: string
//   placeholder?: string
//   view?: InputViewEnum
//   size?: InputSizeEnum
//   state?: InputStateEnum
//   mode?: InputModeEnum
//   onChangeHandler?: (value: string) => void
//   value?: string
//   autoFocus?: boolean
//
// }
type HTMLCustomInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'size' | 'onChange'
>

export interface InputProps extends HTMLCustomInputProps {
  className?: string
  // name: string
  // placeholder?: string
  view?: InputViewEnum
  size?: InputSizeEnum
  state?: InputStateEnum
  mode?: InputModeEnum
  // onChangeHandler?: (value: string) => void
  // value?: string
  autoFocus?: boolean
  onChange?: (value: string) => void
}
