import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfigType } from 'app/provider/StoreProvider'
import { IArticle } from 'entity/Article'
import { controlQueryParams } from 'shared/lib/queryParams/controlQueryParams'

import { getArticleFeedLimit } from '../selector/getArticleFeedLimit'
import { getArticleFeedOrder } from '../selector/getArticleFeedOrder'
import { getArticleFeedPage } from '../selector/getArticleFeedPage'
import { getArticleFeedSearch } from '../selector/getArticleFeedSearch'
import { getArticleFeedSort } from '../selector/getArticleFeedSort'
import { getArticleFeedTag } from '../selector/getArticleFeedTag'

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
