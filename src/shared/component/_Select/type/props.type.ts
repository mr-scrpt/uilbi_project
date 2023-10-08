import { SelectHTMLAttributes } from 'react'

import { OptionSelect } from './option.type'

type HTMLCustomSelectProps = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  'size' | 'onChange'
>

export interface SelectProps<T extends string> extends HTMLCustomSelectProps {
  className?: string
  options: OptionSelect<T>[]
  onChange?: (value: T) => void
  value?: T
}
