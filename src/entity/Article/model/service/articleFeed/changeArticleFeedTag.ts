import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfigType } from '@/app/provider/StoreProvider'

import { articleFeedAction } from '../../slice'
import { fetchArticleFeed } from './fetchArticleFeed'

export const changeArticleFeedTag = createAsyncThunk<
  void,
  string,
  ThunkConfigType<string>
>('feedArticle/changeTag', async (tag, thunkAPI) => {
  const { rejectWithValue, dispatch } = thunkAPI

  try {
    dispatch(articleFeedAction.setTag(tag))
    dispatch(articleFeedAction.setPage(1))
    dispatch(fetchArticleFeed())
  } catch (e) {
    rejectWithValue('error')
  }
})
