import {
  PreloadedState,
  ReducersMapObject,
  configureStore,
} from '@reduxjs/toolkit'
import { $api } from 'shared/api/api'

import { NavigatorType } from '../type/navigator.type'
import { StateSchema } from '../type/state.type'
import { createReducerManager } from './reducerManager'
import { rootReducer } from './rootReducer'

export const createStore = (
  preloadedState?: PreloadedState<StateSchema>,
  asyncReducer?: ReducersMapObject<StateSchema>,
  navigator?: NavigatorType
) => {
  const reducerManager = createReducerManager(rootReducer, asyncReducer)
  const store = configureStore({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            api: $api,
            navigator,
          },
        },
      }),
  })

  // @ts-ignore
  store.reducerManager = reducerManager

  return store
}
