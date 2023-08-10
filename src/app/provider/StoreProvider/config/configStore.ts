import {
  PreloadedState,
  ReducersMapObject,
  configureStore,
} from '@reduxjs/toolkit'

import { ReducerPartial, StateSchema } from '../type/state.type'
import { createReducerManager } from './reducerManager'
import { rootReducer } from './rootReducer'

export const createStore = (
  preloadedState?: PreloadedState<StateSchema>,
  asyncReducer?: ReducersMapObject<StateSchema>
) => {
  const reducerManager = createReducerManager(rootReducer, asyncReducer)
  const store = configureStore({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState,
  })

  // @ts-ignore
  store.reducerManager = reducerManager

  return store
}
