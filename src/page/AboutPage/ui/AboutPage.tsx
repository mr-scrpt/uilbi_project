import { FC } from 'react'
import { classNames } from '@/shared/lib/classNames'
import { useTranslation } from 'react-i18next'
import { AboutPageProps } from '../type/props.type'
import cls from './AboutPage.module.scss'

const AboutPage: FC<AboutPageProps> = (props) => {
  const { className } = props
  const { t } = useTranslation('page_about')

  const clsAboutPage = classNames(cls.aboutPage, [className], {})
  const clsInner = classNames(cls.inner)
  const clsTitle = classNames(cls.title)
  return (
    <div className={clsAboutPage}>
      <div className={clsInner}>
        <div className={clsTitle}>{t('page-about-title')}</div>
      </div>
    </div>
  )
}

export default AboutPage
