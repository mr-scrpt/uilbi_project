import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { IArticle } from '../../type'
import { ArticleState } from '../../type/state.type'
import { fetchArticleData } from '../service/article'

const initialState: ArticleState = {
  data: undefined,
  isLoading: false,
  error: undefined,
}

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArticleData.pending, (state) => {
      state.isLoading = true
      state.error = undefined
    })
    builder.addCase(
      fetchArticleData.fulfilled,
      (state, action: PayloadAction<IArticle>) => {
        state.isLoading = false
        state.error = undefined

        state.data = action.payload
      }
    )
    builder.addCase(fetchArticleData.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
  },
})

export const { actions: articleAction } = articleSlice

export const { reducer: articleReducer } = articleSlice
