import { memo } from 'react'
import { classNames } from 'shared/lib/classNames'

import { TitleProps } from '../type/props.type'
import { TitleSizeEnum } from '../type/size.enum'
import { TitleViewEnum } from '../type/view.enum'
import cls from './style/Title.module.scss'

export const Title = memo((props: TitleProps) => {
  const {
    className,
    children,
    view = TitleViewEnum.PRIMARY,
    size = TitleSizeEnum.L,
  } = props

  const clsTitle = classNames(cls.title, [className], {
    [cls.view_primary]: view === TitleViewEnum.PRIMARY,

    [cls.view_secondary]: view === TitleViewEnum.SECONDARY,
    [cls.size_l]: size === TitleSizeEnum.L,
    [cls.size_m]: size === TitleSizeEnum.M,
    [cls.size_s]: size === TitleSizeEnum.S,
    [cls.size_xl]: size === TitleSizeEnum.XL,
  })

  return (
    <span className={clsTitle}>
      <span className={cls.text}>{children}</span>
    </span>
  )
})
