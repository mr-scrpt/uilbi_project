import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfigType } from 'app/provider/StoreProvider'
import { ArticleViewEnum } from 'entity/Article'
import {
  storageFeedLimit,
  storageFeedView,
} from 'shared/lib/storage/LocalStorage'

import { viewData } from '../data/view.data'
import { getFeedArticleInited } from '../selector/getFeedArticleInited'
import { feedArticleAction } from '../slice/feedArticle.slice'
import { fetchFeedArticle } from './fetchFeedArticle'

export const initFeedArticle = createAsyncThunk<
  void,
  void,
  ThunkConfigType<string>
>('feedArticle/initFeedArticle', async (_, thunkAPI) => {
  const { rejectWithValue, dispatch, getState } = thunkAPI

  try {
    const inited = getFeedArticleInited(getState())
    // console.log('before set page')
    // dispatch(feedArticleAction.setPage(1))
    // console.log('after set page')
    if (!inited) {
      const [base] = viewData
      const initView =
        (storageFeedView.getItem() as ArticleViewEnum) || base.view

      const initLimit = Number(storageFeedLimit.getItem() || base.limitBase)
      dispatch(feedArticleAction.setView(initView))
      dispatch(feedArticleAction.setLimit(initLimit))
      dispatch(fetchFeedArticle())
      dispatch(feedArticleAction.setInited())
    }
  } catch (e) {
    rejectWithValue('error')
  }
})
