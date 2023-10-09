import { HTMLAttributes } from 'react'

import { SelectListDerectionEnum } from './direction.enum'
import { ISelectItem } from './listItem.type'

export interface SelectItemProps<T extends string>
  extends HTMLAttributes<HTMLLIElement> {
  className?: string
  disabled?: boolean
  value?: T
}
export interface SelectProps<T extends string>
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  className?: string
  list: ISelectItem<T>[]
  direction?: SelectListDerectionEnum
  value: T
  onChange?: (value: T) => void
  disabled?: boolean
}
