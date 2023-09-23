import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfigType } from 'app/provider/StoreProvider'
import { IArticle } from 'entity/Article'

import { getFeedArticleHasMore } from '../selector/getFeedArticleHasMore'
import { getFeedArticleInited } from '../selector/getFeedArticleInited'
import { getFeedArticleLimit } from '../selector/getFeedArticleLimit'
import { getFeedArticlePage } from '../selector/getFeedArticlePage'
import { feedArticleAction } from '../slice/feedArticle.slice'

export const fetchFeedArticleNextPage = createAsyncThunk<
  IArticle[] | undefined,
  void,
  ThunkConfigType<string>
>('feedArticle/fetchFeedArticleNextPage', async (_, thunkAPI) => {
  const { getState, extra, rejectWithValue, dispatch } = thunkAPI
  const hasMore = getFeedArticleHasMore(getState())
  const page = getFeedArticlePage(getState())
  const limit = getFeedArticleLimit(getState())
  const inited = getFeedArticleInited(getState())
  const pageNext = page + 1

  if (hasMore && inited) {
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

      dispatch(feedArticleAction.setPage(pageNext))
      return response.data
    } catch (e) {
      return rejectWithValue('error')
    }
  }
  return undefined
})
