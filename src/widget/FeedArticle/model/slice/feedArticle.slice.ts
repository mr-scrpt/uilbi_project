import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit'
import { IArticle } from 'entity/Article'
import { ArticleViewEnum } from 'entity/Article/type/view.enum'

import { OrderDirectionEnum } from '../../type/order.enum'
import { SortFieldEnum } from '../../type/sort.enum'
import { FeedArticleState } from '../../type/state.type'
import { viewData } from '../data/view.data'
import { fetchFeedArticle } from '../service/fetchFeedArticle'
import { fetchFeedArticleNextPage } from '../service/fetchFeedArticleNextPage'

export const feedArticleAdapter = createEntityAdapter<IArticle>({
  selectId: (article) => article.id,
})

const initialState = feedArticleAdapter.getInitialState<FeedArticleState>({
  isLoading: false,
  error: undefined,
  ids: [],
  entities: {},
  feedView: viewData,
  page: 1,
  limit: 4,
  hasMore: true,
  sort: SortFieldEnum.CREATED,
  order: OrderDirectionEnum.ASC,
  search: '',

  _inited: false,
})

export const feedArticleSlice = createSlice({
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
    setOrder: (state, action: PayloadAction<OrderDirectionEnum>) => {
      state.order = action.payload
    },
    setSort: (state, action: PayloadAction<SortFieldEnum>) => {
      state.sort = action.payload
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFeedArticle.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(
        fetchFeedArticle.fulfilled,
        (state, action: PayloadAction<IArticle[]>) => {
          feedArticleAdapter.setAll(state, action.payload)
          state.isLoading = false
          state.hasMore = action.payload.length > 0
        }
      )
      .addCase(fetchFeedArticle.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })

      .addCase(fetchFeedArticleNextPage.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(
        fetchFeedArticleNextPage.fulfilled,
        (state, action: PayloadAction<IArticle[] | undefined>) => {
          if (action.payload) {
            feedArticleAdapter.addMany(state, action.payload)
            state.hasMore = action.payload.length > 0
          }
          state.error = undefined
          state.isLoading = false
        }
      )
      .addCase(fetchFeedArticleNextPage.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { reducer: feedArticleReducer } = feedArticleSlice
export const { actions: feedArticleAction } = feedArticleSlice
