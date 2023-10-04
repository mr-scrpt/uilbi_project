import { HTMLAttributes } from 'react'

export interface TabProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  value: string
  name: string
  active?: boolean
  onTabClick?: (value: string) => void
}
