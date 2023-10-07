import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfigType } from 'app/provider/StoreProvider'
import { IArticle } from 'entity/Article'

import { getArticleFeedHasMore } from '../selector/getArticleFeedHasMore'
import { getArticleFeedInited } from '../selector/getArticleFeedInited'
import { getArticleFeedLimit } from '../selector/getArticleFeedLimit'
import { getArticleFeedOrder } from '../selector/getArticleFeedOrder'
import { getArticleFeedPage } from '../selector/getArticleFeedPage'
import { getArticleFeedSearch } from '../selector/getArticleFeedSearch'
import { getArticleFeedSort } from '../selector/getArticleFeedSort'
import { getArticleFeedTag } from '../selector/getArticleFeedTag'
import { articleFeedAction } from '../slice/articleFeed.slice'

export const fetchArticleFeedNextPage = createAsyncThunk<
  IArticle[] | undefined,
  void,
  ThunkConfigType<string>
>('feedArticle/fetchFeedArticleNextPage', async (_, thunkAPI) => {
  const { getState, extra, rejectWithValue, dispatch } = thunkAPI
  const hasMore = getArticleFeedHasMore(getState())
  const page = getArticleFeedPage(getState())
  const limit = getArticleFeedLimit(getState())
  const inited = getArticleFeedInited(getState())
  const sort = getArticleFeedSort(getState())
  const order = getArticleFeedOrder(getState())
  const search = getArticleFeedSearch(getState())
  const tag = getArticleFeedTag(getState())

  // if (search) {
  // controlQueryParams({ search })
  const pageNext = page + 1

  if (hasMore && inited) {
    try {
      const response = await extra.api.get<IArticle[]>('/articles', {
        params: {
          _expand: 'user',
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

      dispatch(articleFeedAction.setPage(pageNext))
      return response.data
    } catch (e) {
      return rejectWithValue('error')
    }
  }
  return undefined
})
