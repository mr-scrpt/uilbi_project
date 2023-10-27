import { HTMLAttributes } from 'react'

import { StarSizeEnum } from '../../StarLine/type/size.enum'

export interface StarProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  // isSelected?: boolean
  // isHovered?: boolean
  isActive?: boolean
  size: StarSizeEnum
}
