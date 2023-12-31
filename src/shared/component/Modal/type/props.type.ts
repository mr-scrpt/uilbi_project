import { HTMLAttributes } from 'react'

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  isOpen: boolean
  onClose?: () => void
  inElement?: HTMLElement
  closeByEscape?: boolean
  animationDelay?: number
}
