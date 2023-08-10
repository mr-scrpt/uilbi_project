import {
  AnyAction,
  Reducer,
  ReducersMapObject,
  combineReducers,
} from '@reduxjs/toolkit'

import { ReducerManagerType } from '../type/reducerManager.type'
import {
  ReducerPartial,
  StateSchema,
  StateSchemaKeys,
} from '../type/state.type'

// import { PreloadeStateType } from '../type/state.type'
// import { StateSchema, StateSchemaKeys, listReducer } from './rootReducer'

// type ReducerMap = { [key in keyof PreloadeStateType]: Reducer }
// // type ReducerMap = Record<keyof PreloadeStateType, Reducer>
// // type ReducerMap = Record<keyof PreloadeStateType, Reducer>

export function createReducerManager(
  // initialReducers: ReducersMapObject<PreloadeStateType>
  // initialReducers: Reducer<CombinedState<PreloadeStateType>>
  // initialReducers: ReducersMapObject<StateSchema>
  // initialReducers: ReducerMap
  initialReducers: ReducersMapObject<StateSchema>,
  asyncReducer: ReducersMapObject<StateSchema>
): ReducerManagerType {
  const reducers = { ...initialReducers }

  let combinedReducer = combineReducers({ ...asyncReducer, ...reducers })

  let keysToRemove: StateSchemaKeys[] = []

  return {
    getReducerMap: () => reducers,

    reduce: (state: StateSchema, action: AnyAction) => {
      if (keysToRemove.length > 0) {
        state = { ...state }
        // for (let key of keysToRemove) {
        //   delete state[key]
        // }
        keysToRemove.forEach((key) => {
          delete state[key]
        })

        keysToRemove = []
      }

      return combinedReducer(state, action)
    },

    add: (key: StateSchemaKeys, reducer: Reducer) => {
      console.log('add reducer')
      if (!key || reducers[key]) {
        return
      }

      reducers[key] = reducer

      combinedReducer = combineReducers(reducers)
    },

    remove: (key: StateSchemaKeys) => {
      console.log('remove reducer')
      if (!key || !reducers[key]) {
        return
      }

      delete reducers[key]

      keysToRemove.push(key)

      combinedReducer = combineReducers(reducers)
    },
  }
}
