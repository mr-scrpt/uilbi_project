import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { ProfileData } from '../../type/profile.data'
import { ProfileState } from '../../type/state.type'
import { fetchProfileData } from '../service/fetchProfileData/fetchProfileData'

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
  extraReducers: (builder) => {
    builder.addCase(fetchProfileData.pending, (state) => {
      state.isLoading = true
      state.error = null
    })
    builder.addCase(
      fetchProfileData.fulfilled,
      (state, action: PayloadAction<ProfileData>) => {
        state.isLoading = false
        state.error = null
        state.data = action.payload
      }
    )
    builder.addCase(fetchProfileData.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
  },
})

export const { actions: profileAction } = profileSlice

export const { reducer: profileReducer } = profileSlice
