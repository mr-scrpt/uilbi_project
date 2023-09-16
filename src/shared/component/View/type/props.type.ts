import { HTMLAttributes } from 'react'

export interface ViewProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  count: string
}
