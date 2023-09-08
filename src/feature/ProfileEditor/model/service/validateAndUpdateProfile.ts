import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfigType } from 'app/provider/StoreProvider'
import { ProfileData, updateProfileData } from 'entity/Profile'

import { profileEditorAction } from '../slice/profileEditorSlice'
import { validateProfileEditorData } from './validateProfileEditorData'

export const validateAndUpdateProfileData = createAsyncThunk<
  void,
  ProfileData,
  ThunkConfigType<string>
>('profileEditor/validateData', async (data, thunkAPI) => {
  const { rejectWithValue, dispatch, getState } = thunkAPI
  try {
    await dispatch(validateProfileEditorData(data))
    const newState = getState()
    if (!newState.profileEditor?.validationErrors) {
      dispatch(updateProfileData(data))
      dispatch(profileEditorAction.setEditable(false))
    }
  } catch (e) {
    rejectWithValue('server-error')
  }
})
