import { FC } from 'react'
import { Link } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames'
import { LinkAppProps } from '../type/props.type'
import cls from './LinkApp.module.scss'
import { LinkViewEnum } from '../type/view.enum'
import { LinkSizeEnum } from '../type/size.enum'

export const LinkApp: FC<LinkAppProps> = (props) => {
  const {
    to,
    className,
    children,
    view = LinkViewEnum.PRIMARY,
    size = LinkSizeEnum.M,
    ...etc
  } = props

  const classLink = classNames(cls.link, [className], {
    [cls.view_primary]: view === LinkViewEnum.PRIMARY,
    [cls.view_secondary]: view === LinkViewEnum.SECONDARY,

    [cls.size_l]: size === LinkSizeEnum.L,
    [cls.size_m]: size === LinkSizeEnum.M,
    [cls.size_s]: size === LinkSizeEnum.S,
    [cls.size_xl]: size === LinkSizeEnum.XL,
  })

  return (
    <Link to={to} className={classLink} {...etc}>
      {children}
    </Link>
  )
}
