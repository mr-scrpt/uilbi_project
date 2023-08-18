import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfigType } from 'app/provider/StoreProvider'
import { ModalNameEnum, modalAction } from 'entity/Modal'
import { User, userAction } from 'entity/User'
import { storageAuthData } from 'shared/lib/storage/LocalStorage'

import { LoginDataType } from './login.type'

export const loginByUserName = createAsyncThunk<
  User,
  LoginDataType,
  ThunkConfigType<string>
>('login/loginByUsername', async (authData, thunkAPI) => {
  const {
    dispatch,
    rejectWithValue,
    extra: { api, navigate },
  } = thunkAPI
  try {
    const response = await api.post<User>('/login', authData)

    if (!response.data) {
      throw new Error()
    }

    storageAuthData.setItem(response.data)

    dispatch(userAction.setAuth(response.data))
    dispatch(modalAction.closeModal({ name: ModalNameEnum.LOGIN }))
    // navigate('/about')

    return response.data
  } catch (e) {
    console.log(e)
    return rejectWithValue('api-error-login-message')
  }
})
