import { createSlice } from '@reduxjs/toolkit'
import { UserState } from 'entity/User/type/state.type'

const initialState: UserState = {}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
})

export const { actions: userAction } = userSlice

export const { reducer: userReducer } = userSlice
