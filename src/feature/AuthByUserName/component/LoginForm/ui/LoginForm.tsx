import { ReduxStoreWithManager } from 'app/provider/StoreProvider/type/store.type'
import { SyntheticEvent, memo, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector, useStore } from 'react-redux'
import { Button } from 'shared/component/Button'
import { Input } from 'shared/component/Input'
import { InputModeEnum } from 'shared/component/Input/type/mode.enum'
import { Title, TitleViewEnum } from 'shared/component/Title'
import { classNames } from 'shared/lib/classNames'
import { DynamicModuleLoader } from 'shared/lib/component/DynamicModuleLoader/DynamicModuleLoader'
import { ReducerList } from 'shared/lib/component/DynamicModuleLoader/type/props.type'
import { useAppDispatch } from 'shared/lib/component/useAppDispatch'

import { getLoginError } from '../../../model/selector/getLoginError/getLoginError'
import { getLoginLoading } from '../../../model/selector/getLoginLoading/getLoginLoading'
import { getLoginPassword } from '../../../model/selector/getLoginPassword/getLoginPassword'
import { getLoginUserName } from '../../../model/selector/getLoginUserName/getLoginUserName'
import { loginByUserName } from '../../../model/service/login/login.thunk'
import { loginAction, loginReducer } from '../../../model/slice/loginSlice'
import { LoginFormProps } from '../type/props.type'
import cls from './LoginForm.module.scss'

export const LoginForm = memo((props: LoginFormProps) => {
  const { className, setFocus } = props
  const dispatch = useAppDispatch()
  const username = useSelector(getLoginUserName)
  const password = useSelector(getLoginPassword)
  const isLoading = useSelector(getLoginLoading)
  const error = useSelector(getLoginError)
  const { setUserName, setPassword } = loginAction

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
      // dispatch(loginByUserName({ username, password }))
      dispatch(loginByUserName({ username, password }))
    },
    [dispatch, username, password]
  )

  const componentReducerList: ReducerList = {
    login: loginReducer,
  }

  return (
    <DynamicModuleLoader reducerList={componentReducerList} removeAfterUnmount>
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
              <div className={cls.fieldName}>
                {t('form-field-label-title-login')}
              </div>
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
    </DynamicModuleLoader>
  )
})

export default LoginForm
