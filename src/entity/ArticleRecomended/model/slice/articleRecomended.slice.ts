import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit'
import { IArticle } from '@/entity/Article'
import { ArticleRecomendedState } from '@/entity/ArticleRecomended/type/state.type'

import { fetchArticleRecomended } from '../service/fetchArticleRecomended'

export const articleRecomendedAdapter = createEntityAdapter<IArticle>({
  selectId: (article) => article.id,
})

const initialState =
  articleRecomendedAdapter.getInitialState<ArticleRecomendedState>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    limit: 4,

    _inited: false,
  })

export const articleRecomendedSlice = createSlice({
  name: 'feedArticleSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleRecomended.pending, (state) => {
        state.error = undefined
        state.isLoading = true
        articleRecomendedAdapter.removeAll(state)
      })
      .addCase(
        fetchArticleRecomended.fulfilled,
        (state, action: PayloadAction<IArticle[]>) => {
          articleRecomendedAdapter.setAll(state, action.payload)
          state.isLoading = false
        }
      )
      .addCase(fetchArticleRecomended.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { reducer: articleRecomendedReducer } = articleRecomendedSlice
export const { actions: articleRecomendedAction } = articleRecomendedSlice
