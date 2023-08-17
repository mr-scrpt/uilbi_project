import { HTMLAttributes } from 'react'
import { IconEnum } from 'shared/component/Icon'
import { LinkModeEnum } from 'shared/component/LinkApp'
import { RoutePath } from 'shared/config/configRouter/configRouter'

export interface SidebarProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  collapsed?: boolean
  toggleHandler?: () => void
}

export interface SidebarItemProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  to: keyof typeof RoutePath
  icon: IconEnum
  text: string
  mode: LinkModeEnum
}

export interface SidebarMenuProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  mode: LinkModeEnum
}
