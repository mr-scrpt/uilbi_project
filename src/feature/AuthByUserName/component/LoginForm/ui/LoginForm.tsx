import { SyntheticEvent, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Button } from 'shared/component/Button'
import { Input } from 'shared/component/Input'
import { InputModeEnum } from 'shared/component/Input/type/mode.enum'
import { Title, TitleViewEnum } from 'shared/component/Title'
import { classNames } from 'shared/lib/classNames'
import { useAppDispatch } from 'shared/lib/hook/useAppDispatch'

import { getLoginState } from '../../../model/selector/getLoginState/getAuthState'
import { loginByUserName } from '../../../model/service/login/login.thunk'
import { loginAction } from '../../../model/slice/loginSlice'
import { LoginFormProps } from '../type/props.type'
import cls from './LoginForm.module.scss'

export const LoginForm = memo((props: LoginFormProps) => {
  const { className, setFocus } = props
  const dispatch = useAppDispatch()
  const { setUserName, setPassword } = loginAction
  const { username, password, isLoading, error } = useSelector(getLoginState)

  const { t } = useTranslation('form')
  const { t: tError } = useTranslation('error_list')

  const clsLoginForm = classNames(cls.form, [className], {})

  const onChangeUserName = useCallback(
    (username: string) => {
      dispatch(setUserName(username))
    },
    [setUserName, dispatch]
  )

  const onChangePassword = useCallback(
    (password: string) => {
      dispatch(setPassword(password))
    },
    [setPassword, dispatch]
  )

  const onSubmit = useCallback(
    (e: SyntheticEvent) => {
      e.preventDefault()
      dispatch(loginByUserName({ username, password }))
    },
    [dispatch, username, password]
  )

  return (
    <form className={clsLoginForm} onSubmit={onSubmit}>
      <div className={cls.inner}>
        <div className={cls.fieldRow}>
          <Title view={TitleViewEnum.SECONDARY}>
            {t('form-title-login-modal')}
          </Title>
        </div>
        <div className={cls.fieldRow}>
          <div className={cls.textError}>{tError(error)}</div>
        </div>
        <div className={cls.fieldBox}>
          <label className={cls.fieldRow}>
            <Input
              className={cls.input}
              placeholder={t('form-field-input-placeholder-login')}
              name="login"
              mode={InputModeEnum.WIDTH_AVAILABLE}
              onChangeHandler={onChangeUserName}
              autoFocus={setFocus}
              value={username}
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
              onChangeHandler={onChangePassword}
              value={password}
            />
          </label>
        </div>
        <div className={cls.buttonBox}>
          <Button type="submit" className={cls.button} disabled={isLoading}>
            {t('form-field-button-submit')}
          </Button>
        </div>
      </div>
    </form>
  )
})
