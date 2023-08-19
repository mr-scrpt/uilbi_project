import { fetchProfileData, profileReducer } from 'entity/Profile'
import { getProfileData } from 'entity/Profile/model/selector/getProfileData/getProfileData'
import { FC, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames'
import { DynamicModuleLoader } from 'shared/lib/component/DynamicModuleLoader/DynamicModuleLoader'
import { ReducerList } from 'shared/lib/component/DynamicModuleLoader/type/props.type'
import { useAppDispatch } from 'shared/lib/component/useAppDispatch'

import { ProfilePageProps } from '../type/props.type'
import cls from './ProfilePage.module.scss'

export const ProfilePage: FC<ProfilePageProps> = (props) => {
  const { className } = props

  const { t } = useTranslation('page_profile')

  const clsProfilePage = classNames(cls.profile, [className], {})

  const componentReducerList: ReducerList = {
    profile: profileReducer,
  }

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])

  const profile = useSelector(getProfileData)

  return (
    <DynamicModuleLoader reducerList={componentReducerList} removeAfterUnmount>
      <div className={clsProfilePage}>{t('Profile_Page')}</div>
      <div>{profile?.username}</div>
    </DynamicModuleLoader>
  )
}
