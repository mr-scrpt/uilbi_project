import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames'

import { LoginFormProps } from '../type/props.type'
import cls from './LoginForm.module.scss'

export const LoginForm: FC<LoginFormProps> = (props) => {
  const { className } = props

  const { t } = useTranslation()

  const clsLoginForm = classNames(cls.form, [className], {})
  return <form className={clsLoginForm}>{t('form')}</form>
}
