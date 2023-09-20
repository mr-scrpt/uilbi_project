import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit'
import { IArticle } from 'entity/Article'
import { ArticleViewEnum } from 'entity/Article/type/view.enum'
import { FeedArticleState } from 'widget/FeedArticle/type/state.type'
import { FeedArticleView } from 'widget/FeedArticle/type/view.type'

import { viewData } from '../data/view.data'
import { fetchFeedArticle } from '../service/fetchFeedArticle'

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
          console.log('payload', action.payload)
          state.isLoading = false
          feedArticleAdapter.addMany(state, action.payload)
          state.hasMore = action.payload.length > 0
        }
      )
      .addCase(fetchFeedArticle.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { reducer: feedArticleReducer } = feedArticleSlice
export const { actions: feedArticleAction } = feedArticleSlice
