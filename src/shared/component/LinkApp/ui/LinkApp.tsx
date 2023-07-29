import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames'
import { Icon } from 'shared/component/Icon'
import { LinkAppProps } from '../type/props.type'
import cls from './LinkApp.module.scss'
import { LinkViewEnum } from '../type/view.enum'
import { LinkSizeEnum } from '../type/size.enum'
import { LinkModeEnum } from '../type/mode.enum'

export const LinkApp: FC<LinkAppProps> = (props) => {
  const [hovered, setHovered] = useState(false)

  const {
    to,
    className,
    classIcon,
    children,
    view = LinkViewEnum.PRIMARY,
    size = LinkSizeEnum.M,
    icon,
    mode = LinkModeEnum.DEFAULT,
    ...etc
  } = props

  const classLink = classNames(cls.link, [className], {
    [cls.view_primary]: view === LinkViewEnum.PRIMARY,
    [cls.view_secondary]: view === LinkViewEnum.SECONDARY,

    [cls.size_l]: size === LinkSizeEnum.L,
    [cls.size_m]: size === LinkSizeEnum.M,
    [cls.size_s]: size === LinkSizeEnum.S,
    [cls.size_xl]: size === LinkSizeEnum.XL,

    [cls.hovered]: hovered,
  })
  const clsIconButton = classNames(cls.icon, [classIcon])
  const clsText = classNames(cls.text)

  const showIcon =
    icon && (mode === LinkModeEnum.DEFAULT || mode === LinkModeEnum.ICON)
  const showText =
    children && (mode === LinkModeEnum.DEFAULT || mode === LinkModeEnum.TEXT)

  return (
    <Link
      to={to}
      className={classLink}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...etc}
    >
      {showIcon && <Icon icon={icon} className={clsIconButton} />}
      {showText && <div className={clsText}>{children}</div>}
    </Link>
  )
}
