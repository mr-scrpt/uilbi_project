import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Button,
  ButtonShapeEnum,
  ButtonViewEnum,
} from '@/shared/component/Button'
import { classNames } from '@/shared/lib/classNames'

import { LangSwitcherProps } from '../type/props.type'
import { LangSwitcherViewEnum } from '../type/view.enum'
import cls from './LangSwitcher.module.scss'

export const LangSwitcher = memo((props: LangSwitcherProps) => {
  const { className, view = LangSwitcherViewEnum.FULL } = props
  const { t, i18n } = useTranslation()

  const clsLangSwitcher = classNames(cls.langSwitcher, [className])

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
  }

  const text =
    view === LangSwitcherViewEnum.FULL
      ? t('button-translate')
      : t('button-translate-short')

  return (
    <div className={clsLangSwitcher}>
      <Button
        onClick={toggleLang}
        view={ButtonViewEnum.TRANSPARENT}
        shape={ButtonShapeEnum.FLAT}
      >
        {text}
      </Button>
    </div>
  )
})
