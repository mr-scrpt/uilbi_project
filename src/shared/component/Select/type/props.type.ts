import { SelectHTMLAttributes } from 'react'

import { OptionSelect } from './option.type'

type HTMLCustomSelectProps = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  'size' | 'onChange'
>

export interface SelectProps extends HTMLCustomSelectProps {
  className?: string
  options: OptionSelect[]
  onChange?: (value: string) => void
}
