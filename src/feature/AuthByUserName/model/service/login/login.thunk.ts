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
  try {
    const response = await axios.post<User>(
      'http://localhost:8000/login',
      authData
    )

    if (!response.data) {
      throw new Error()
    }

    storageAuthData.setItem(response.data)

    thunkAPI.dispatch(userAction.setAuth(response.data))
    thunkAPI.dispatch(modalAction.closeModal({ name: ModalNameEnum.LOGIN }))

    return response.data
  } catch (e) {
    console.log(e)
    return thunkAPI.rejectWithValue('api-error-login-message')
  }
})
