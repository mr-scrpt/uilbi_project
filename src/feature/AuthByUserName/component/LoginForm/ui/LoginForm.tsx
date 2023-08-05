import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/component/Button'
import { Input } from 'shared/component/Input'
import { InputModeEnum } from 'shared/component/Input/type/mode.enum'
import { classNames } from 'shared/lib/classNames'

import { LoginFormProps } from '../type/props.type'
import cls from './LoginForm.module.scss'

export const LoginForm: FC<LoginFormProps> = (props) => {
  const { className, setFocus } = props
  const [login, setLogin] = useState('')

  const { t } = useTranslation('form')

  const clsLoginForm = classNames(cls.form, [className], {})
  return (
    <form className={clsLoginForm}>
      <div className={cls.inner}>
        <div className={cls.fieldBox}>
          <label className={cls.fieldRow}>
            <div className={cls.fieldName}>
              {t('form-field-label-title-name')}
              {login}
            </div>
            <Input
              className={cls.input}
              placeholder={t('form-field-input-placeholder-login')}
              name="login"
              mode={InputModeEnum.WIDTH_AVAILABLE}
              onChangeHandler={setLogin}
              value={login}
              autoFocus={setFocus}
            />
          </label>

          <label className={cls.fieldRow}>
            <div className={cls.fieldName}>
              {t('form-field-label-title-password')}
            </div>

            <Input
              className={cls.input}
              placeholder={t('form-field-input-placeholder-password')}
              name="password"
              mode={InputModeEnum.WIDTH_AVAILABLE}
            />
          </label>
        </div>
        <div className={cls.buttonBox}>
          <Button className={cls.button}>
            {t('form-field-button-submit')}
          </Button>
        </div>
      </div>
    </form>
  )
}
