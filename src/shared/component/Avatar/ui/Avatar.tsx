import { FC } from 'react'
import { classNames } from 'shared/lib/classNames'

import { AvatarProps } from '../type/props.type'
import cls from './Avatar.module.scss'

export const Avatar: FC<AvatarProps> = (props) => {
  const { className, source, title } = props

  const clsAvatar = classNames(cls.avatar, [className], {})
  return (
    <div className={clsAvatar}>
      <div className={cls.inner}>
        <img src={source} alt={title} className={cls.img} />
      </div>
    </div>
  )
}
