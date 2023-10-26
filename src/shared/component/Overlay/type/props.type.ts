import { HTMLAttributes } from 'react'

export interface OverlayProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  positionClass?: string
  onClick?: () => void
}
