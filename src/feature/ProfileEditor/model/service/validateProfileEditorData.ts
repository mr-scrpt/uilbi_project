import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfigType } from 'app/provider/StoreProvider'
import { ProfileData } from 'entity/Profile'
import { ProfileValidateSchema } from 'feature/ProfileEditor/type/validate.schema'
import { ProfileEditorValidateType } from 'feature/ProfileEditor/type/validate.type'
import { ValiError, flatten, parse } from 'valibot'

export const validateProfileEditorData = createAsyncThunk<
  null,
  ProfileData,
  ThunkConfigType<ProfileEditorValidateType>
>('profileEditor/validateData', async (data, thunkAPI) => {
  const { rejectWithValue } = thunkAPI
  try {
    parse(ProfileValidateSchema, data)

    return null
  } catch (e) {
    const { nested: customError } = flatten(e as ValiError)

    return rejectWithValue(customError)
  }
})
