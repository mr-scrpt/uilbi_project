import { HTMLAttributes } from 'react'

export interface DrawerProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  isOpen: boolean
  inElement?: HTMLElement
  onClose?: () => void
  animationDelay?: number
}
