import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames'
import { Button } from 'shared/component/Button'
import { LangSwitcherProps } from '../type/props.type'

import cls from './LangSwitcher.module.scss'

export const LangSwitcher: FC<LangSwitcherProps> = (props) => {
  const { className } = props
  const { t, i18n } = useTranslation()

  const clsLangSwitcher = classNames(cls.langSwitcher, [className])

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
  }

  return (
    <div className={clsLangSwitcher}>
      <Button onClick={toggleLang}>{t('button-translate')}</Button>
    </div>
  )
}
