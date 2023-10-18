import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfigType } from 'app/provider/StoreProvider'

import { articleFeedAction } from '../../slice'
import { fetchArticleFeed } from './fetchArticleFeed'

export const changeArticleFeedSearch = createAsyncThunk<
  void,
  string,
  ThunkConfigType<string>
>('feedArticle/changeSearch', async (query, thunkAPI) => {
  const { rejectWithValue, dispatch } = thunkAPI

  try {
    dispatch(articleFeedAction.setSearch(query))
    dispatch(articleFeedAction.setPage(1))
    dispatch(fetchArticleFeed())
  } catch (e) {
    rejectWithValue('error')
  }
})
