import { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Input } from 'shared/component/Input'
import { classNames } from 'shared/lib/classNames'
import { useAppDispatch } from 'shared/lib/component/useAppDispatch'

import { getProfileData } from '../../model/selector/getProfileData/getProfileData'
import { fetchProfileData } from '../../model/service/fetchProfileData/fetchProfileData'
import { ProfileProps } from '../../type/props.type'
import cls from './ProfileCard.module.scss'

export const ProfileCard: FC<ProfileProps> = (props) => {
  const { className } = props

  const clsProfile = classNames(cls.profile, [className], {})
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])

  const profile = useSelector(getProfileData)

  return (
    <div className={clsProfile}>
      <Input value={profile?.firstname} name="firstname" />
      <Input value={profile?.lastname} name="lastname" />
      <Input value={profile?.currency} name="currency" />
      <Input value={profile?.city} name="city" />
      <Input value={profile?.avatar} name="avatar" />
      <Input value={profile?.role} name="role" />
    </div>
  )
}
