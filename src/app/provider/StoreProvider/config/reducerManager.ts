import { AnyAction, Reducer, combineReducers } from '@reduxjs/toolkit'

import { ReducerManagerType } from '../type/reducerManager.type'
import {
  ReducerListMapObject,
  StateSchema,
  StateSchemaKeys,
} from '../type/state.type'

export function createReducerManager(
  initialReducers: ReducerListMapObject,
  asyncReducer?: ReducerListMapObject
): ReducerManagerType {
  const reducers = { ...initialReducers }

  let combinedReducer = combineReducers({ ...asyncReducer, ...reducers })

  let keysToRemove: StateSchemaKeys[] = []

  return {
    getReducerMap: () => reducers,

    reduce: (state: StateSchema, action: AnyAction) => {
      if (keysToRemove.length > 0) {
        state = { ...state }
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
