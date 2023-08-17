import { memo } from 'react'
import { classNames } from 'shared/lib/classNames'

import { IconEnum } from '../type/icon.enum'
import { IconProps } from '../type/icon.props'
import cls from './Icon.module.scss'

export const Icon = memo((props: IconProps) => {
  const { className, icon, ...etc } = props

  const clsIcon = classNames(cls.icon, [className], {
    [cls.icon_theme]: icon === IconEnum.THEME,

    [cls.icon_burger]: icon === IconEnum.BURGER,

    [cls.icon_menu]:
      icon === IconEnum.MENU_HOME ||
      icon === IconEnum.MENU_ABOUT ||
      icon === IconEnum.MENU_PROFILE,
    [cls.icon_menu_home]: icon === IconEnum.MENU_HOME,
    [cls.icon_menu_about]: icon === IconEnum.MENU_ABOUT,
    [cls.icon_menu_profile]: icon === IconEnum.MENU_PROFILE,
  })

  return <span className={clsIcon} {...etc} />
})
