import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { ProfileData } from '../../type/profile.data'
import { ProfileState } from '../../type/state.type'
import { fetchProfileData } from '../service/fetchProfileData/fetchProfileData'
import { updateProfileData } from '../service/updateProfileData/updateProfileData'

const initialState: ProfileState = {
  data: undefined,
  isLoading: false,
  error: undefined,
  readonly: true,
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProfileData.pending, (state) => {
      state.isLoading = true
      state.error = undefined
    })
    builder.addCase(
      fetchProfileData.fulfilled,
      (state, action: PayloadAction<ProfileData>) => {
        state.isLoading = false
        state.error = undefined

        state.data = action.payload
      }
    )
    builder.addCase(fetchProfileData.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })

    builder.addCase(updateProfileData.pending, (state) => {
      state.isLoading = true
      state.error = undefined
    })
    builder.addCase(
      updateProfileData.fulfilled,
      (state, action: PayloadAction<ProfileData>) => {
        state.isLoading = false
        state.error = undefined

        state.data = action.payload
      }
    )
    builder.addCase(updateProfileData.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
  },
})

export const { actions: profileAction } = profileSlice

export const { reducer: profileReducer } = profileSlice
