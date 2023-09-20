import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfigType } from 'app/provider/StoreProvider'
import { IArticle } from 'entity/Article'

import { IFetchArticleData } from '../../type/action.type'

export const fetchFeedArticle = createAsyncThunk<
  IArticle[],
  IFetchArticleData,
  ThunkConfigType<string>
>('feedArticle/fetchFeedArticle', async (data, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI
  const { page, limit } = data
  console.log('in base fetch action', page, limit)

  try {
    const response = await extra.api.get<IArticle[]>('/articles', {
      params: {
        _expand: 'user',
        _page: page,
        _limit: limit,
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
