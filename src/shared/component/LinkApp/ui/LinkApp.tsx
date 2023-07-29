import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames'
import { LinkAppProps } from '../type/props.type'
import cls from './LinkApp.module.scss'
import { LinkViewEnum } from '../type/view.enum'
import { LinkSizeEnum } from '../type/size.enum'
import { Icon } from 'shared/component/Icon'

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

  return (
    <Link
      to={to}
      className={classLink}
      {...etc}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {icon && <Icon icon={icon} className={clsIconButton} />}

      <div className={clsText}>{children}</div>
    </Link>
  )
}
