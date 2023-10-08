import { HTMLAttributes } from 'react'

import { ISelectItem } from './listItem.type'

export interface SelectItemProps extends HTMLAttributes<HTMLLIElement> {
  className?: string
  disabled?: boolean
  value?: string
}
export interface SelectProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  className?: string
  list: ISelectItem[]
  value: string
  onChange?: (value: string) => void
  disabled?: boolean
}
