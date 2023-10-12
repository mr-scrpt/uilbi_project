import { HTMLAttributes } from 'react'

import { IDropDownItem } from './item.type'

export interface DropDownProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  list: IDropDownItem[]
}
