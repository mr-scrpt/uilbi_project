import { PreloadedState, configureStore } from '@reduxjs/toolkit'
import { $api } from 'shared/api/api'

import { NavigatorType } from '../type/navigator.type'
import { ReducerListMapObject, StateSchema } from '../type/state.type'
import { createReducerManager } from './reducerManager'
import { rootReducer } from './rootReducer'

export const createStore = (
  preloadedState?: PreloadedState<StateSchema>,
  asyncReducer?: ReducerListMapObject,
  navigate?: NavigatorType
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
            navigate,
          },
        },
      }),
  })

  // @ts-ignore
  store.reducerManager = reducerManager

  return store
}
