import { createSelector } from '@reduxjs/toolkit'
import { StateSchema } from 'app/provider/StoreProvider'

import { getScrollManagerData } from './getScrollManagerData'

export const getScrollManagerPosition = createSelector(
  getScrollManagerData,
  (state: StateSchema, path: string) => path,
  (scroll, path) => scroll[path] || 0
)
