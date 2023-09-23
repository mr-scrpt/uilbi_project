import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfigType } from 'app/provider/StoreProvider'
import { ArticleViewEnum } from 'entity/Article'
import {
  storageFeedLimit,
  storageFeedView,
} from 'shared/lib/storage/LocalStorage'

import { getFeedArticleLimitBase } from '../selector/getFeedArticleBaseLimit'
import { feedArticleAction } from '../slice/feedArticle.slice'
import { fetchFeedArticle } from './fetchFeedArticle'

export const changeFeedArticleView = createAsyncThunk<
  void,
  ArticleViewEnum,
  ThunkConfigType<string>
>('feedArticle/changeView', async (view, thunkAPI) => {
  const { rejectWithValue, dispatch, getState } = thunkAPI

  try {
    dispatch(feedArticleAction.setView(view))
    //   storageFeedView.setItem(view)

    // const limit = getFeedArticleLimitBase(getState())
    // if (limit) {
    //   dispatch(feedArticleAction.setLimit(limit))
    //   dispatch(fetchFeedArticle())
    //   storageFeedView.setItem(view)
    //   storageFeedLimit.setItem(limit)
    // }
  } catch (e) {
    rejectWithValue('error')
  }
})
