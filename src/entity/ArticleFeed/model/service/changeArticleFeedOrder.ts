import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfigType } from 'app/provider/StoreProvider'
import { ArticleFeedOrderEnum } from 'entity/ArticleFeed/type/order.enum'
import { storageFeedOrder } from 'shared/lib/storage/LocalStorage'

import { articleFeedAction } from '../slice/articleFeed.slice'
import { fetchArticleFeed } from './fetchArticleFeed'

export const changeArticleFeedOrder = createAsyncThunk<
  void,
  ArticleFeedOrderEnum,
  ThunkConfigType<string>
>('feedArticle/changeOrder', async (order, thunkAPI) => {
  const { rejectWithValue, dispatch } = thunkAPI

  try {
    dispatch(articleFeedAction.setOrder(order))
    storageFeedOrder.setItem(order)
    dispatch(articleFeedAction.setPage(1))
    dispatch(fetchArticleFeed())
  } catch (e) {
    rejectWithValue('error')
  }
})
