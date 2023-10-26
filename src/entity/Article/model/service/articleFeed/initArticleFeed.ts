import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfigType } from '@/app/provider/StoreProvider'
// import { ArticleSortFieldEnum, ArticleViewEnum } from 'entity/ArticleFeed'
// import { ArticleFeedOrderEnum } from 'entity/ArticleFeed/type/order.enum'
// import { ArticleFeedSearchParamsEnum } from 'entity/ArticleFeed/type/params.enum'
import {
  storageFeedLimit,
  storageFeedOrder,
  storageFeedSort,
  storageFeedView,
} from '@/shared/lib/storage/LocalStorage'

import {
  ArticleFeedOrderEnum,
  ArticleFeedSearchParamsEnum,
  ArticleFeedSortFieldEnum,
  ArticleFeedViewEnum,
} from '../../../type'
import { viewData } from '../../data/view.data'
import { getArticleFeedInited } from '../../selector/articleFeed'
import { articleFeedAction } from '../../slice'
import { fetchArticleFeed } from './fetchArticleFeed'

export const initArticleFeed = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfigType<string>
>('feedArticle/initFeedArticle', async (searchParams, thunkAPI) => {
  const { rejectWithValue, dispatch, getState } = thunkAPI
  console.log('init thunk')

  try {
    const inited = getArticleFeedInited(getState())
    if (!inited) {
      const [base] = viewData
      const initView =
        (storageFeedView.getItem() as ArticleFeedViewEnum) || base.view

      const initLimit = Number(storageFeedLimit.getItem() || base.limitBase)
      const initSort =
        storageFeedSort.getItem() || ArticleFeedSortFieldEnum.CREATED
      const initOrder = storageFeedOrder.getItem() || ArticleFeedOrderEnum.ASC

      const urlOrder = searchParams.get(ArticleFeedSearchParamsEnum.ORDER)
      const urlSort = searchParams.get(ArticleFeedSearchParamsEnum.SORT)
      const urlSearch = searchParams.get(ArticleFeedSearchParamsEnum.SEARCH)
      const urlTag = searchParams.get(ArticleFeedSearchParamsEnum.TAG)
      dispatch(articleFeedAction.setView(initView))

      dispatch(articleFeedAction.setLimit(initLimit))
      dispatch(articleFeedAction.setSort(urlSort || initSort))
      dispatch(articleFeedAction.setOrder(urlOrder || initOrder))
      if (urlSearch) {
        dispatch(articleFeedAction.setSearch(urlSearch))
      }
      if (urlTag) {
        dispatch(articleFeedAction.setTag(urlTag))
      }
      dispatch(fetchArticleFeed())
      dispatch(articleFeedAction.setInited())
    }
  } catch (e) {
    rejectWithValue('error')
  }
})
