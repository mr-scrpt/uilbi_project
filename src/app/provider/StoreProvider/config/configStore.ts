import {
    PreloadedState,
  ReducersMapObject,
  configureStore,
} from '@reduxjs/toolkit'
import { $api } from 'shared/api/api'

import { StateSchema } from '../type/state.type'
import { createReducerManager } from './reducerManager'
import { rootReducer } from './rootReducer'

export const createStore = (
  preloadedState?: PreloadedState<StateSchema>,
  asyncReducer?: ReducersMapObject<StateSchema>,
  navigate?: NavigatorType
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
            navigate,
          },
        },
      }),
  })

  store.reducerManager = reducerManager

  return store
}
