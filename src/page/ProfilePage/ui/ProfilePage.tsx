import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames'
import { ProfileEditor } from '@/widget/ProfileEditor/ui/ProfileEditor'

import { ProfilePageProps } from '../type/props.type'
import cls from './ProfilePage.module.scss'

export const ProfilePage: FC<ProfilePageProps> = (props) => {
  const { className } = props

  const { t } = useTranslation('page_profile')

  const clsProfilePage = classNames(cls.profile, [className], {})

  return (
    <>
      <div className={clsProfilePage}>{t('Profile_Page')}</div>
      <ProfileEditor />
    </>
  )
}
