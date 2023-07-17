import { FC } from "react"
import { classNames } from "shared/lib/classNames"
import { IconProps } from "./type/icon.props"
import cls from './Icon.module.scss'
import { IconEnum } from "./type/icon.enum"

export const Icon: FC<IconProps> = (props) => {

  const { className, icon, ...etc } = props

  const clsIcon = classNames(cls.icon, [className], {
    [cls.icon_theme]: icon === IconEnum.THEME_LIGHT || icon === IconEnum.THEME_DARK,
    [cls.icon_theme_light]: icon === IconEnum.THEME_LIGHT,
    [cls.icon_theme_dark]: icon === IconEnum.THEME_DARK,
  })

  return (
    <span className={clsIcon} {...etc}></span>
  )
}
