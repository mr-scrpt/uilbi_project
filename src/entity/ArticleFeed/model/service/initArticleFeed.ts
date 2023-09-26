import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfigType } from 'app/provider/StoreProvider'
import { ArticleViewEnum } from 'entity/Article'
import {
  storageFeedLimit,
  storageFeedView,
} from 'shared/lib/storage/LocalStorage'

import { viewData } from '../data/view.data'
import { getArticleFeedInited } from '../selector/getArticleFeedInited'
import { articleFeedAction } from '../slice/articleFeed.slice'
import { fetchArticleFeed } from './fetchArticleFeed'

export const initArticleFeed = createAsyncThunk<
  void,
  void,
  ThunkConfigType<string>
>('feedArticle/initFeedArticle', async (_, thunkAPI) => {
  const { rejectWithValue, dispatch, getState } = thunkAPI

  try {
    const inited = getArticleFeedInited(getState())
    // console.log('before set page')
    // dispatch(feedArticleAction.setPage(1))
    // console.log('after set page')
    if (!inited) {
      const [base] = viewData
      const initView =
        (storageFeedView.getItem() as ArticleViewEnum) || base.view

      const initLimit = Number(storageFeedLimit.getItem() || base.limitBase)
      dispatch(articleFeedAction.setView(initView))
      dispatch(articleFeedAction.setLimit(initLimit))
      dispatch(fetchArticleFeed())
      dispatch(articleFeedAction.setInited())
    }
  } catch (e) {
    rejectWithValue('error')
  }
})
