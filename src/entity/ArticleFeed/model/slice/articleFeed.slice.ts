import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit'
import { IArticle } from 'entity/Article'
import { ArticleViewEnum } from 'entity/ArticleFeed'

import { ArticleFeedOrderEnum } from '../../type/order.enum'
import { ArticleFeedSortFieldEnum } from '../../type/sort.enum'
import { ArticleFeedState } from '../../type/state.type'
import { viewData } from '../data/view.data'
import { fetchArticleFeed } from '../service/fetchArticleFeed'
import { fetchArticleFeedNextPage } from '../service/fetchArticleFeedNextPage'

export const articleFeedAdapter = createEntityAdapter<IArticle>({
  selectId: (article) => article.id,
})

const initialState = articleFeedAdapter.getInitialState<ArticleFeedState>({
  isLoading: false,
  error: undefined,
  ids: [],
  entities: {},
  feedView: viewData,
  page: 1,
  limit: 4,
  hasMore: true,
  sort: ArticleFeedSortFieldEnum.CREATED,
  order: ArticleFeedOrderEnum.ASC,
  search: '',

  _inited: false,
})

export const articleFeedSlice = createSlice({
  name: 'feedArticleSlice',
  initialState,
  reducers: {
    setView: (state, action: PayloadAction<ArticleViewEnum>) => {
      if (state.feedView) {
        state.feedView = state.feedView.map((item) => {
          if (item.view === action.payload) {
            return { ...item, view: action.payload, isActive: true }
          }
          return { ...item, isActive: false }
        })
      }
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
    setLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload
    },
    setInited: (state) => {
      state._inited = true
    },
    setOrder: (state, action: PayloadAction<ArticleFeedOrderEnum>) => {
      state.order = action.payload
    },
    setSort: (state, action: PayloadAction<ArticleFeedSortFieldEnum>) => {
      state.sort = action.payload
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleFeed.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(
        fetchArticleFeed.fulfilled,
        (state, action: PayloadAction<IArticle[]>) => {
          articleFeedAdapter.setAll(state, action.payload)
          state.isLoading = false
          state.hasMore = action.payload.length > 0
        }
      )
      .addCase(fetchArticleFeed.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })

      .addCase(fetchArticleFeedNextPage.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(
        fetchArticleFeedNextPage.fulfilled,
        (state, action: PayloadAction<IArticle[] | undefined>) => {
          if (action.payload) {
            articleFeedAdapter.addMany(state, action.payload)
            state.hasMore = action.payload.length > 0
          }
          state.error = undefined
          state.isLoading = false
        }
      )
      .addCase(fetchArticleFeedNextPage.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { reducer: articleFeedReducer } = articleFeedSlice
export const { actions: articleFeedAction } = articleFeedSlice
