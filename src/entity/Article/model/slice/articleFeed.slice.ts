import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit'

import {
  ArticleFeedOrderEnum,
  ArticleFeedSortFieldEnum,
  ArticleFeedState,
  ArticleFeedViewEnum,
  IArticle,
} from '../../type'
import { viewData } from '../data/view.data'
import {
  fetchArticleFeed,
  fetchArticleFeedNextPage,
} from '../service/articleFeed'

export const articleFeedAdapter = createEntityAdapter<IArticle>({
  selectId: (article) => article.id,
})

console.log('adapter =>>>>>', articleFeedAdapter)

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
  tag: '',

  _inited: false,
})

export const articleFeedSlice = createSlice({
  name: 'feedArticleSlice',
  initialState,
  reducers: {
    setView: (state, action: PayloadAction<ArticleFeedViewEnum>) => {
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
    setTag: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleFeed.pending, (state) => {
        console.log('in pending')
        state.error = undefined
        state.isLoading = true
        articleFeedAdapter.removeAll(state)
      })
      .addCase(
        fetchArticleFeed.fulfilled,
        (state, action: PayloadAction<IArticle[]>) => {
          console.log('in fulfilled')
          articleFeedAdapter.setAll(state, action.payload)
          state.isLoading = false
          state.hasMore = action.payload.length >= state.limit
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
            console.log('in reducer', action.payload)
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
