import { classNames } from '@/shared/lib/classNames'
import { memo } from 'react'

import { Icon, IconEnum } from '../../Icon'
import { StarSizeEnum } from '../../StarLine/type/size.enum'
import { StarProps } from '../type/props.type'
import cls from './Star.module.scss'

export const Star = memo((props: StarProps) => {
  const {
    className,
    // isSelected = false,
    // isHovered = false,
    isActive = false,
    size = StarSizeEnum.L,
    ...rest
  } = props

  const icon = isActive ? IconEnum.STAR_SELECTED : IconEnum.STAR
  const clsStar = classNames(cls.star, [className], {
    [cls.size_l]: size === StarSizeEnum.L,
    [cls.size_m]: size === StarSizeEnum.M,
    [cls.size_s]: size === StarSizeEnum.S,
    [cls.size_xl]: size === StarSizeEnum.XL,
  })
  return <Icon className={clsStar} icon={icon} {...rest} />
})
