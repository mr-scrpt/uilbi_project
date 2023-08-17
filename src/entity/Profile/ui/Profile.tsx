import { FC } from 'react'
import { classNames } from 'shared/lib/classNames'

import { ProfileProps } from '../type/props.type'
import cls from './Profile.module.scss'

export const Profile: FC<ProfileProps> = (props) => {
  const { className } = props

  const clsProfile = classNames(cls.profile, [className], {})
  return <div className={clsProfile}></div>
}
