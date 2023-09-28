import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfigType } from 'app/provider/StoreProvider'
import { IArticle } from 'entity/Article'

import { getArticleFeedLimit } from '../selector/getArticleFeedLimit'
import { getArticleFeedOrder } from '../selector/getArticleFeedOrder'
import { getArticleFeedPage } from '../selector/getArticleFeedPage'
import { getArticleFeedSort } from '../selector/getArticleFeedSort'

export const fetchArticleFeed = createAsyncThunk<
  IArticle[],
  void,
  ThunkConfigType<string>
>('feedArticle/fetchFeedArticle', async (_, thunkAPI) => {
  const { extra, rejectWithValue, getState } = thunkAPI
  const page = getArticleFeedPage(getState())

  const limit = getArticleFeedLimit(getState())
  const sort = getArticleFeedSort(getState())
  const order = getArticleFeedOrder(getState())

  try {
    const response = await extra.api.get<IArticle[]>('/articles', {
      params: {
        _expand: 'user',
        _page: page,
        _limit: limit,
        _sort: sort,
        _order: order,
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
