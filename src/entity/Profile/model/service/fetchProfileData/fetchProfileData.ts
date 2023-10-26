import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfigType } from '@/app/provider/StoreProvider'

import { ProfileData } from '../../../type/profile.data'

export const fetchProfileData = createAsyncThunk<
  ProfileData,
  string,
  ThunkConfigType<string>
>('profile/fethcProfileData', async (userId, thunkAPI) => {
  const { rejectWithValue, extra } = thunkAPI
  try {
    const response = await extra.api.get<ProfileData>(`/profile/${userId}`)

    if (!response.data) {
      throw new Error()
    }

    return response.data
  } catch (e) {
    console.log(e)
    return rejectWithValue('api-error-profile-message')
  }
})
