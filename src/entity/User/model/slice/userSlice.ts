import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { User } from 'entity/User'
import { UserState } from 'entity/User/type/state.type'
import { storageAuthData } from 'shared/lib/storage/LocalStorage'

const initialState: UserState = {
  _inited: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuth: (state, { payload }: PayloadAction<User>) => {
      state.authData = payload
    },
    initAuth: (state) => {
      const user = storageAuthData.getItem()
      console.log('user', user)

      if (user) {
        state.authData = user
      }
      state._inited = true
    },
    logout: (state) => {
      state.authData = undefined
      // state._inited = false
      storageAuthData.removeItem()
    },
  },
})

export const { actions: userAction } = userSlice

export const { reducer: userReducer } = userSlice
