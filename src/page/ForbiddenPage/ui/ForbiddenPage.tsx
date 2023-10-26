import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames'

import { ForbiddenPageProps } from '../type/props.type'
import cls from './ForbiddenPage.module.scss'

export const ForbiddenPage = memo((props: ForbiddenPageProps) => {
  const { className } = props

  const { t } = useTranslation()

  const clsForbiddenPage = classNames(cls.forbiddenPage, [className], {})
  const clsInner = classNames(cls.inner)
  const clsTitle = classNames(cls.title)
  return (
    <div className={clsForbiddenPage}>
      <div className={clsInner}>
        <div className={clsTitle}>{t('page-forbidden-title')}</div>
      </div>
    </div>
  )
})
