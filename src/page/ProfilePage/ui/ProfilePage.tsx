import { ProfileCard, profileReducer } from 'entity/Profile'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames'
import { DynamicModuleLoader } from 'shared/lib/component/DynamicModuleLoader/DynamicModuleLoader'
import { ReducerList } from 'shared/lib/component/DynamicModuleLoader/type/props.type'

import { ProfilePageProps } from '../type/props.type'
import cls from './ProfilePage.module.scss'

export const ProfilePage: FC<ProfilePageProps> = (props) => {
  const { className } = props

  const { t } = useTranslation('page_profile')

  const clsProfilePage = classNames(cls.profile, [className], {})

  const componentReducerList: ReducerList = {
    profile: profileReducer,
  }

  return (
    <DynamicModuleLoader reducerList={componentReducerList} removeAfterUnmount>
      <div className={clsProfilePage}>{t('Profile_Page')}</div>
      <ProfileCard />
    </DynamicModuleLoader>
  )
}
