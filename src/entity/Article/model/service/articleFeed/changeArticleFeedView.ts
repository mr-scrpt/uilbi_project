import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfigType } from '@/app/provider/StoreProvider'
import {
  storageFeedLimit,
  storageFeedView,
} from '@/shared/lib/storage/LocalStorage'

import { ArticleFeedViewEnum } from '../../../type/view.enum'
import { getArticleFeedLimitBase } from '../../selector/articleFeed'
import { articleFeedAction } from '../../slice'
import { fetchArticleFeed } from './fetchArticleFeed'

export const changeArticleFeedView = createAsyncThunk<
  void,
  ArticleFeedViewEnum,
  ThunkConfigType<string>
>('feedArticle/changeView', async (view, thunkAPI) => {
  const { rejectWithValue, dispatch, getState } = thunkAPI

  try {
    dispatch(articleFeedAction.setView(view))
    storageFeedView.setItem(view)
    dispatch(articleFeedAction.setPage(1))

    const limit = getArticleFeedLimitBase(getState())
    if (limit) {
      dispatch(articleFeedAction.setLimit(limit))
      dispatch(fetchArticleFeed())
      storageFeedView.setItem(view)
      storageFeedLimit.setItem(limit)
    }
  } catch (e) {
    rejectWithValue('error')
  }
})
