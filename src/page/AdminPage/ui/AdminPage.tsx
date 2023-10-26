import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames'

import { AdminPageProps } from '../type/props.type'
import cls from './AdminPage.module.scss'

export const AdminPage = memo((props: AdminPageProps) => {
  const { className } = props
  const { t } = useTranslation('page_about')

  const clsAdminPage = classNames(cls.adminPage, [className], {})
  const clsInner = classNames(cls.inner)
  const clsTitle = classNames(cls.title)
  return (
    <div className={clsAdminPage}>
      <div className={clsInner}>
        <div className={clsTitle}>{t('page-admin-title')}</div>
      </div>
    </div>
  )
})
