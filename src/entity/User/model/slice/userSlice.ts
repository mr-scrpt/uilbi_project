import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { User } from 'entity/User'
import { UserState } from 'entity/User/type/state.type'
import { storageAuthData } from 'shared/lib/storage/LocalStorage'

const initialState: UserState = {}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuth: (state, { payload }: PayloadAction<User>) => {
      state.authData = payload
    },
    initAuth: (state) => {
      const user = storageAuthData.getItem()
      if (user) {
        state.authData = user
      }
    },
    logout: (state) => {
      state.authData = undefined
      storageAuthData.removeItem()
    },
  },
})

export const { actions: userAction } = userSlice

export const { reducer: userReducer } = userSlice
