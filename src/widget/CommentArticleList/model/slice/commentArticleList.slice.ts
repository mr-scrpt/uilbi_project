import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit'
import { CommentType } from 'entity/Comment'
import { CommentArticleListState } from 'widget/CommentArticleList/type/state.type'

import { fetchCommentArticleListById } from '../service/fetchCommentArticleList'

export const commentsAdapter = createEntityAdapter<CommentType>({
  selectId: (comment) => comment.id,
})

const initialState = commentsAdapter.getInitialState<CommentArticleListState>({
  isLoading: false,
  error: undefined,
  ids: [],
  entities: {},
})

export const commentArticleListSlice = createSlice({
  name: 'commentArticleListSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentArticleListById.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(
        fetchCommentArticleListById.fulfilled,
        (state, action: PayloadAction<CommentType[]>) => {
          state.isLoading = false
          commentsAdapter.setAll(state, action.payload)
        }
      )
      .addCase(fetchCommentArticleListById.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { reducer: commentArticleListReducer } = commentArticleListSlice
