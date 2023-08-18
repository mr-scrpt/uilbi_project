import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { ModalNameEnum, modalAction } from 'entity/Modal'
import { User, userAction } from 'entity/User'
import { storageAuthData } from 'shared/lib/storage/LocalStorage'

import { LoginDataType } from './login.type'

export const loginByUserName = createAsyncThunk<
  User,
  LoginDataType,
  { rejectValue: string }
>('login/loginByUsername', async (authData, thunkAPI) => {
  const {
    dispatch,
    extra: { api },
    rejectWithValue,
  } = thunkAPI
  try {
    const response = await axios.post<User>(
      'http://localhost:8000/login',
      authData
    )

    // thunkAPI.extra.api

    if (!response.data) {
      throw new Error()
    }

    storageAuthData.setItem(response.data)

    dispatch(userAction.setAuth(response.data))
    dispatch(modalAction.closeModal({ name: ModalNameEnum.LOGIN }))

    return response.data
  } catch (e) {
    console.log(e)
    return rejectWithValue('api-error-login-message')
  }
})
