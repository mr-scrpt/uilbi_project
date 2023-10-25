import { memo } from 'react'
import { classNames } from 'shared/lib/classNames'

import { IconEnum } from '../type/icon.enum'
import { IconProps } from '../type/icon.props'
import cls from './Icon.module.scss'

export const Icon = memo((props: IconProps) => {
  const { className, icon, ...etc } = props

  const clsIcon = classNames(cls.icon, [className], {
    [cls.icon_theme]: icon === IconEnum.THEME,
    [cls.icon_eye]: icon === IconEnum.EYE,
    [cls.icon_calendar]: icon === IconEnum.CALENDAR,
    [cls.icon_notify]: icon === IconEnum.NOTIFY,

    [cls.icon_burger]: icon === IconEnum.BURGER,

    [cls.icon_menu]:
      icon === IconEnum.MENU_HOME ||
      icon === IconEnum.MENU_ABOUT ||
      icon === IconEnum.MENU_ARTICLE_FEED ||
      icon === IconEnum.MENU_PROFILE,
    [cls.icon_menu_home]: icon === IconEnum.MENU_HOME,
    [cls.icon_menu_about]: icon === IconEnum.MENU_ABOUT,
    [cls.icon_menu_profile]: icon === IconEnum.MENU_PROFILE,
    [cls.icon_menu_feed]: icon === IconEnum.MENU_ARTICLE_FEED,
    [cls.icon_view_row]: icon === IconEnum.VIEW_ROW,
    [cls.icon_view_tile]: icon === IconEnum.VIEW_TILE,
  })

  return <span className={clsIcon} {...etc} />
})
