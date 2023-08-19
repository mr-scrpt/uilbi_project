import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfigType } from 'app/provider/StoreProvider'

import { ProfileData } from '../../../type/profile.data'

export const fetchProfileData = createAsyncThunk<
  ProfileData,
  void,
  ThunkConfigType<string>
>('profile/fethcProfileData', async (_, thunkAPI) => {
  const { rejectWithValue, extra } = thunkAPI
  try {
    const response = await extra.api.get<ProfileData>('/profile')
    // console.log('response', response)

    if (!response.data) {
      throw new Error()
    }

    return response.data
  } catch (e) {
    console.log(e)
    return rejectWithValue('api-error-profile-message')
  }
})
