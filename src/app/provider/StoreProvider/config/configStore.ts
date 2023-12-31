import { PreloadedState, configureStore } from '@reduxjs/toolkit'
import { $api } from '@/shared/api/api'
import { rtkApi } from '@/shared/api/rtkApi'

import { ReducerListMapObject, StateSchema } from '../type/state.type'
import { createReducerManager } from './reducerManager'
import { rootReducer } from './rootReducer'

export const createStore = (
  preloadedState?: PreloadedState<StateSchema>,
  asyncReducer?: ReducerListMapObject
) => {
  const reducerManager = createReducerManager(rootReducer, asyncReducer)

  const store = configureStore({
    // @ts-ignore
    reducer: reducerManager.reduce as ReducerListMapObject,
    devTools: __IS_DEV__,
    preloadedState,

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            api: $api,
          },
        },
      }).concat(rtkApi.middleware),
  })

  // @ts-ignore
  store.reducerManager = reducerManager

  return store
}
