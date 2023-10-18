import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfigType } from 'app/provider/StoreProvider'

import { IArticle } from '../../../type'

export const fetchArticleData = createAsyncThunk<
  IArticle,
  string,
  ThunkConfigType<string>
>('profile/fethcProfileData', async (id, thunkAPI) => {
  const { rejectWithValue, extra } = thunkAPI
  try {
    const response = await extra.api.get<IArticle>(`/articles/${id}`, {
      params: {
        _expand: 'user',
      },
    })

    if (!response.data) {
      throw new Error()
    }

    return response.data
  } catch (e) {
    console.log(e)
    return rejectWithValue('api-error-profile-message')
  }
})
