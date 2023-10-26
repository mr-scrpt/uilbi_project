import { User } from '@/entity/User'
import { HTMLAttributes } from 'react'

export interface UserMenuProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  user: User
  logout: () => void
}
