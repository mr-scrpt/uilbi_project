import { FC } from 'react'
import { classNames } from 'shared/lib/classNames'

import { ImgProps } from '../type/props.type'
import cls from './Img.module.scss'

export const Img: FC<ImgProps> = (props) => {
  const { className, src, ...rest } = props

  const clsImg = classNames(cls.img, [className], {})
  return <img className={clsImg} src={src} {...rest} />
}
