import { HTMLAttributes } from 'react'

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  width?: number | string
  maxWidth?: number | string
  height?: number | string
  maxHeight?: number | string
}
