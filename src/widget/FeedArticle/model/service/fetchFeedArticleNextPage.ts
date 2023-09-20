import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfigType } from 'app/provider/StoreProvider'

import { getFeedArticleHasMore } from '../selector/getFeedArticleHasMore'
import { getFeedArticleIsLoading } from '../selector/getFeedArticleIsLoading'
import { getFeedArticleLimit } from '../selector/getFeedArticleLimit'
import { getFeedArticlePage } from '../selector/getFeedArticlePage'
import { feedArticleAction } from '../slice/feedArticle.slice'
import { fetchFeedArticle } from './fetchFeedArticle'

export const fetchFeedArticleNextPage = createAsyncThunk<
  void,
  void,
  ThunkConfigType<string>
>('feedArticle/fetchFeedArticleNextPage', async (_, thunkAPI) => {
  const { getState, dispatch } = thunkAPI
  const hasMore = getFeedArticleHasMore(getState())
  const page = getFeedArticlePage(getState())
  const isLoading = getFeedArticleIsLoading(getState())
  const limit = getFeedArticleLimit(getState())
  console.log('in fetch next', hasMore, page, isLoading, limit)

  if (hasMore && !isLoading) {
    dispatch(feedArticleAction.setPage(page + 1))
    dispatch(
      fetchFeedArticle({
        page: page + 1,
        limit,
      })
    )
  }
})
