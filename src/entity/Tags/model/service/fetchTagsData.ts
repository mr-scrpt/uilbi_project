import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfigType } from 'app/provider/StoreProvider'
import { ITag } from 'entity/Tags/type/tag.type'

export const fetchTagsData = createAsyncThunk<
  ITag[],
  void,
  ThunkConfigType<string>
>('tags/fetchTagsData', async (_, thunkAPI) => {
  const { rejectWithValue, extra } = thunkAPI
  try {
    const response = await extra.api.get<ITag[]>(`/tags`)

    if (!response.data) {
      throw new Error()
    }

    return response.data
  } catch (e) {
    console.log(e)
    return rejectWithValue('api-error-profile-message')
  }
})
