import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { loginByUserName } from '../service/login/login.thunk'
import { AuthState } from '../type/state.type'

const initialState: AuthState = {
  username: '',
  password: '',
  isLoading: false,
  error: null,
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUserName: (state, { payload }: PayloadAction<string>) => {
      state.username = payload
    },
    setPassword: (state, { payload }: PayloadAction<string>) => {
      state.password = payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginByUserName.pending, (state) => {
      state.isLoading = true
      state.error = null
    })
    builder.addCase(loginByUserName.fulfilled, (state, action) => {
      state.isLoading = false
      state.error = null
      // state.username = action.payload.username
      // state.password = action.payload.password
    })
    builder.addCase(loginByUserName.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
  },
})

export const { actions: loginAction } = loginSlice

export const { reducer: loginReducer } = loginSlice
