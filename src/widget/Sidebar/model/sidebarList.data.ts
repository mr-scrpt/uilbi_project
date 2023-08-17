import { IconEnum } from 'shared/component/Icon'
import { LinkModeEnum } from 'shared/component/LinkApp'
import { RouteApp } from 'shared/config/configRouter/configRouter'

import { SidebarListType } from '../type/list.type'

export const SidebarListData: SidebarListType = (mode: LinkModeEnum) => [
  {
    to: RouteApp.MAIN,
    icon: IconEnum.MENU_HOME,
    text: 'menu-navigation-link-main',
    mode,
  },
  {
    to: RouteApp.ABOUT,
    icon: IconEnum.MENU_ABOUT,
    text: 'menu-navigation-link-about',
    mode,
  },
  {
    to: RouteApp.PROFILE,
    icon: IconEnum.MENU_PROFILE,
    text: 'menu-navigation-link-profile',
    mode,
  },
]
