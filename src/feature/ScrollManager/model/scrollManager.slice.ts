import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { ScrollManagerState } from '../type/state.type'

const initialState: ScrollManagerState = {
  data: {},
}

export const scrollManagerSlice = createSlice({
  name: 'scrollManager',
  initialState,
  reducers: {
    setScrollData: (
      state,
      { payload }: PayloadAction<{ path: string; position: number }>
    ) => {
      const { path, position } = payload
      state.data[path] = position
    },
  },
})

export const { actions: scrollManagerAction } = scrollManagerSlice
export const { reducer: scrollManagerReducer } = scrollManagerSlice
