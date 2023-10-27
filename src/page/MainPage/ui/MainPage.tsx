import { Counter } from '@/entity/Counter'
import { BugButton } from '@/feature/BugButton'
import {
  Input,
  InputSizeEnum,
  InputStateEnum,
  InputViewEnum,
} from '@/shared/component/Input'
import { StarLine } from '@/shared/component/StarLine'
import { StarSizeEnum } from '@/shared/component/StarLine/type/size.enum'
import { classNames } from '@/shared/lib/classNames'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

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
          <StarLine
            size={StarSizeEnum.XL}
            onSelected={(value) => console.log('my selecetd rate', value)}
          />
          <Input
            view={InputViewEnum.PRIMARY}
            size={InputSizeEnum.L}
            state={InputStateEnum.ERROR}
            name="test"
          />
          <Counter />
          {t('page-main-title')}
          <BugButton />
        </div>
      </div>
    </div>
  )
}

export default MainPage
