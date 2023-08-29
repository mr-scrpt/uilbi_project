import { HTMLAttributes } from 'react'

export interface EditorBarProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  save: () => void
  reset: () => void
}
