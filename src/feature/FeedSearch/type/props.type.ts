import { HTMLAttributes } from 'react'

export interface FeedSearchProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  search: string
  onChangeSearch: (value: string) => void
}
