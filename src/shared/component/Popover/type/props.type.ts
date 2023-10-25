import { HTMLAttributes, ReactNode } from 'react'

import { PopoverPositionEnum } from './position.enum'

export interface PopoverProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  control: ReactNode
  position: PopoverPositionEnum
}
