import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { loginByUserName } from '../service/login/login.thunk'
import { AuthState } from '../type/state.type'

const initialState: AuthState = {
  data: {
    username: '',
    password: '',
  },
  isLoading: false,
  error: '',
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUserName: (state, { payload }: PayloadAction<string>) => {
      state.data.username = payload
    },
    setPassword: (state, { payload }: PayloadAction<string>) => {
      state.data.password = payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginByUserName.pending, (state) => {
      state.isLoading = true
      state.error = ''
    })
    builder.addCase(loginByUserName.fulfilled, (state) => {
      state.isLoading = false
      state.error = ''
      // state.data.username = action.payload.username
      // state.data.password = action.payload.password
    })
    builder.addCase(loginByUserName.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
  },
})

export const { actions: loginAction } = loginSlice

export const { reducer: loginReducer } = loginSlice
