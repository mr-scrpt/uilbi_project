import { HTMLAttributes } from 'react'

import { StarSizeEnum } from './size.enum'

export interface StarLineProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  size?: StarSizeEnum
  starCount?: number
  starSelected?: number
  onSelected?: (selected: number) => void
}
