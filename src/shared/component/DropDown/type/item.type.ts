import { ReactNode } from 'react'

export interface IDropDownItem {
  id: string | number
  Component?: ReactNode
  title?: string
  href?: string

  onClick?: () => void
  // Component?: ReactNode
  // onClick?: () => void
  // href?: string
}
