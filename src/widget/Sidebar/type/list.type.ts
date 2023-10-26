import { LinkModeEnum } from '@/shared/component/LinkApp'

import { SidebarItemProps } from './props.type'

export type SidebarListType = (
  mode: LinkModeEnum,
  authOnly: boolean,
  userId: string | undefined
) => SidebarItemProps[]
