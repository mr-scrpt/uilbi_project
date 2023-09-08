import { IconEnum } from 'shared/component/Icon'
import { LinkModeEnum } from 'shared/component/LinkApp'
import { RoutePath } from 'shared/config/configRouter/configRouter'

import { SidebarListType } from '../type/list.type'

export const SidebarListData: SidebarListType = (
  mode: LinkModeEnum,
  authOnly: boolean
) =>
  [
    {
      to: RoutePath.main,
      icon: IconEnum.MENU_HOME,
      text: 'menu-navigation-link-main',
      mode,
    },
    {
      to: RoutePath.about,
      icon: IconEnum.MENU_ABOUT,
      text: 'menu-navigation-link-about',
      mode,
    },
    {
      to: RoutePath.profile,
      icon: IconEnum.MENU_PROFILE,
      text: 'menu-navigation-link-profile',
      authOnly: true,
      mode,
    },
    {
      to: RoutePath.articleFeed,
      icon: IconEnum.MENU_ARTICLE_FEED,
      text: 'menu-navigation-link-article-feed',
      authOnly: true,
      mode,
    },
  ].filter((item) => {
    if (item.authOnly && !authOnly) {
      return null
    }
    return item
  })
