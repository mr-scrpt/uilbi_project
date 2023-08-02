import { PreloadedState, configureStore } from '@reduxjs/toolkit'

import { PreloadeStateType } from '../type/state.type'
import { rootReducer } from './rootReducer'

export const createStore = (
  preloadedState?: PreloadedState<PreloadeStateType>
) =>
  configureStore({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState,
  })
