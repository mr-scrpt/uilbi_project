import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfigType } from 'app/provider/StoreProvider'

import { ProfileData } from '../../../type/profile.data'

export const updateProfileData = createAsyncThunk<
  ProfileData,
  ProfileData,
  ThunkConfigType<string>
>('profile/updataUpdateData', async (data, thunkAPI) => {
  const { rejectWithValue, extra } = thunkAPI
  try {
    const response = await extra.api.put<ProfileData>('/profile', data)

    if (!response.data) {
      throw new Error()
    }

    return response.data
  } catch (e) {
    console.log(e)
    return rejectWithValue('api-error-profile-message')
  }
})
