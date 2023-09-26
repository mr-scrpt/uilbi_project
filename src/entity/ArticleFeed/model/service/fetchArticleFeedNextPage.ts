import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfigType } from 'app/provider/StoreProvider'
import { IArticle } from 'entity/Article'

import { getArticleFeedHasMore } from '../selector/getArticleFeedHasMore'
import { getArticleFeedInited } from '../selector/getArticleFeedInited'
import { getArticleFeedLimit } from '../selector/getArticleFeedLimit'
import { getArticleFeedPage } from '../selector/getArticleFeedPage'
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
  const pageNext = page + 1

  if (hasMore && inited) {
    console.log('next page =6..')
    try {
      const response = await extra.api.get<IArticle[]>('/articles', {
        params: {
          _expand: 'user',
          _page: pageNext,
          _limit: limit,
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
