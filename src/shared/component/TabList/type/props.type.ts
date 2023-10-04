import { HTMLAttributes } from 'react'
import { ITab } from 'shared/component/Tab'

export interface TabListProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  active?: string
  tabsList: ITab[]
  onTabClick?: (value: string) => void
}
