import { FC } from 'react'
import { classNames } from 'shared/lib/classNames'
import { IconProps } from '../type/icon.props'
import cls from './Icon.module.scss'
import { IconEnum } from '../type/icon.enum'

export const Icon: FC<IconProps> = (props) => {
  const { className, icon, ...etc } = props

  const clsIcon = classNames(cls.icon, [className], {
    [cls.icon_theme]: icon === IconEnum.THEME,

    [cls.icon_burger]: icon === IconEnum.BURGER,

    [cls.icon_menu]:
      icon === IconEnum.MENU_HOME || icon === IconEnum.MENU_ABOUT,
    [cls.icon_menu_home]: icon === IconEnum.MENU_HOME,
    [cls.icon_menu_about]: icon === IconEnum.MENU_ABOUT,
  })

  return <span className={clsIcon} {...etc} />
}
