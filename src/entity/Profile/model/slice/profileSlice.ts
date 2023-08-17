import { createSlice } from '@reduxjs/toolkit'
import { ProfileState } from 'entity/Profile/type/state.type'

const initialState: ProfileState = {
  data: undefined,
  isLoading: false,
  error: null,
  readonly: true,
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: () => {},
})

export const { actions: profileAction } = profileSlice

export const { reducer: profileReducer } = profileSlice
