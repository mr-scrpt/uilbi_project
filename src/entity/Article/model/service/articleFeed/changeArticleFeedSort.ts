import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfigType } from '@/app/provider/StoreProvider'
import { storageFeedSort } from '@/shared/lib/storage/LocalStorage'

import { ArticleFeedSortFieldEnum } from '../../../type/sort.enum'
import { articleFeedAction } from '../../slice'
import { fetchArticleFeed } from './fetchArticleFeed'

export const changeArticleFeedSort = createAsyncThunk<
  void,
  ArticleFeedSortFieldEnum,
  ThunkConfigType<string>
>('feedArticle/changeSort', async (sort, thunkAPI) => {
  const { rejectWithValue, dispatch, getState } = thunkAPI

  try {
    dispatch(articleFeedAction.setSort(sort))
    storageFeedSort.setItem(sort)
    dispatch(articleFeedAction.setPage(1))

    // const sort = getArticleFeedSort(getState())
    // if (sort) {
    //   dispatch(articleFeedAction.setSort(sort))
    dispatch(fetchArticleFeed())
    //   storageFeedSort.setItem((sort))
    // }
  } catch (e) {
    rejectWithValue('error')
  }
})
