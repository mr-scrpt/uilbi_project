import { Counter } from 'entity/Counter'
import { BugButton } from 'feature/ButButton/ui/BugButton'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames'

import { MainPageProps } from '../type/props.type'
import cls from './MainPage.module.scss'

const MainPage: FC<MainPageProps> = (props) => {
  const { className } = props
  const { t } = useTranslation('page_main')

  const clsMainPage = classNames(cls.mainPage, [className], {})
  const clsInner = classNames(cls.inner)
  const clsTitle = classNames(cls.title)
  return (
    <div className={clsMainPage}>
      <div className={clsInner}>
        <div className={clsTitle}>
          <Counter />
          {t('page-main-title')}

          <BugButton />
        </div>
      </div>
    </div>
  )
}

export default MainPage
