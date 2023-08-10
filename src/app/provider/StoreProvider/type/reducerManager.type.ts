import {
  AnyAction,
  CombinedState,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit'

import { StateSchema, StateSchemaKeys } from './state.type'

export interface ReducerManagerType {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: StateSchemaKeys, reducer: Reducer) => void
  remove: (key: StateSchemaKeys) => void
}
