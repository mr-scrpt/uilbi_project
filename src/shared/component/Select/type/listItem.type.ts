import { ReactNode } from 'react'

export interface ISelectItem<T extends string> {
  value: T
  content: ReactNode
  disabled: boolean
}
