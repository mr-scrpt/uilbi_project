import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfigType } from 'app/provider/StoreProvider'
import { IArticle } from 'entity/Article'

export const fetchFeedArticle = createAsyncThunk<
  IArticle[],
  string | undefined,
  ThunkConfigType<string>
>('feedArticle/fetchFeedArticle', async (_, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI

  try {
    const response = await extra.api.get<IArticle[]>('/articles', {
      params: {
        _expand: 'user',
      },
    })
    if (!response.data) {
      throw new Error()
    }

    return response.data
  } catch (e) {
    return rejectWithValue('error')
  }
})
