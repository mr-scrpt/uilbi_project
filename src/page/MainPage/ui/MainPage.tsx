import { FC } from 'react'
import { classNames } from 'shared/lib/classNames'
import { useTranslation } from 'react-i18next'
import cls from './MainPage.module.scss'
import { MainPageProps } from '../type/props.type'

const MainPage: FC<MainPageProps> = (props) => {
  const { className } = props
  const { t } = useTranslation('page_main')

  const clsMainPage = classNames(cls.mainPage, [className], {})
  const clsInner = classNames(cls.inner)
  const clsTitle = classNames(cls.title)
  return (
    <div className={clsMainPage}>
      <div className={clsInner}>
        <div className={clsTitle}>{t('page-main-title')}</div>
      </div>
    </div>
  )
}

export default MainPage
