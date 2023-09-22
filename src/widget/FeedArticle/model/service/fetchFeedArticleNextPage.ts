import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfigType } from 'app/provider/StoreProvider'
import { IArticle } from 'entity/Article'

import { getFeedArticleHasMore } from '../selector/getFeedArticleHasMore'
import { getFeedArticleInited } from '../selector/getFeedArticleInited'
import { getFeedArticleIsLoading } from '../selector/getFeedArticleIsLoading'
import { getFeedArticleLimit } from '../selector/getFeedArticleLimit'
import { getFeedArticlePage } from '../selector/getFeedArticlePage'
import { feedArticleAction } from '../slice/feedArticle.slice'

export const fetchFeedArticleNextPage = createAsyncThunk<
  IArticle[],
  void,
  ThunkConfigType<string>
>('feedArticle/fetchFeedArticleNextPage', async (_, thunkAPI) => {
  const { getState, extra, rejectWithValue, dispatch } = thunkAPI
  const hasMore = getFeedArticleHasMore(getState())
  const page = getFeedArticlePage(getState())
  const isLoading = getFeedArticleIsLoading(getState())
  const limit = getFeedArticleLimit(getState())
  const inited = getFeedArticleInited(getState())
  const pageNext = page + 1

  console.log('in thunk  hasMore', hasMore)
  console.log('in thunk  dispatch isLoading', !isLoading)
  console.log('in thunk  dispatch inited', inited)

  // if (hasMore && !isLoading) {
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
    console.log('before return response', response.data)

    dispatch(feedArticleAction.setPage(pageNext))
    return response.data
  } catch (e) {
    return rejectWithValue('error')
  }
  // }
  // return void
})
