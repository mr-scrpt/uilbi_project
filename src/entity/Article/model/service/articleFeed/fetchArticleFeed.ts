import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfigType } from 'app/provider/StoreProvider'
import { controlQueryParams } from 'shared/lib/queryParams/controlQueryParams'

import { IArticle } from '../../../type'
import {
  getArticleFeedLimit,
  getArticleFeedOrder,
  getArticleFeedPage,
  getArticleFeedSearch,
  getArticleFeedSort,
  getArticleFeedTag,
} from '../../selector/articleFeed'

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
  const search = getArticleFeedSearch(getState())
  const tag = getArticleFeedTag(getState())

  // if (search) {
  controlQueryParams({ search })
  // }

  // if (search === '') {
  //   console.log('empty =7', search)
  //   window.history.deleteUrl('search')
  //   addQueryParams({ search })
  // }
  if (tag) {
    controlQueryParams({ tag })
  }
  controlQueryParams({ sort, order })

  try {
    const response = await extra.api.get<IArticle[]>('/articles', {
      params: {
        _expand: ['user'],
        _page: page,
        _limit: limit,
        _sort: sort,
        _order: order,
        tagsId: tag === '' ? undefined : tag,
        q: search,
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
