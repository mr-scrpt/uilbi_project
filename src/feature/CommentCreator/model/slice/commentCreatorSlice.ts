import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { CommentCreatorState } from '../../type/state.type'

const initialState: CommentCreatorState = {
  text: '',
  error: undefined,
}

export const commentCreatorSlice = createSlice({
  name: 'commentCreatorSlice',
  initialState,
  reducers: {
    setComment: (state, action: PayloadAction<string>) => {
      state.text = action.payload
      state.error = undefined
    },
  },
})

export const { actions: commentCreatorActions } = commentCreatorSlice
export const { reducer: commentCreatorReducer } = commentCreatorSlice
