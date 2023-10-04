import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { TagsState } from 'entity/Tags/type/state.type'
import { ITag } from 'entity/Tags/type/tag.type'

import { fetchTagsData } from '../service/fetchTagsData'

const initialState: TagsState = {
  data: [],
  isLoading: false,
  error: undefined,
}
export const tagsSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTagsData.pending, (state) => {
      state.isLoading = true
      state.error = undefined
    })
    builder.addCase(
      fetchTagsData.fulfilled,
      (state, action: PayloadAction<ITag[]>) => {
        state.isLoading = false
        state.error = undefined

        state.data = action.payload
      }
    )
    builder.addCase(fetchTagsData.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
  },
})

export const { actions: tagsAction } = tagsSlice

export const { reducer: tagsReducer } = tagsSlice
