import { FC } from 'react'
import { classNames } from 'shared/lib/classNames'
import { useTranslation } from 'react-i18next'

import { NotFoundPageProps } from '../type/props.type'

import cls from './NotFoundPage.module.scss'

const NotFoundPage: FC<NotFoundPageProps> = (props) => {
  const { className } = props
  const { t } = useTranslation('page_not_found')

  const clsNotFoundPage = classNames(cls.notFoundPage, [className], {})
  const clsInner = classNames(cls.inner)
  const clsTitle = classNames(cls.title)

  return (
    <div className={clsNotFoundPage}>
      <div className={clsInner}>
        <div className={clsTitle}>{t('page-not-found-title')}</div>
      </div>
    </div>
  )
}

export default NotFoundPage
