import { AnyAction, CombinedState, Reducer } from '@reduxjs/toolkit'

import {
  ReducerListMapObject,
  StateSchema,
  StateSchemaKeys,
} from './state.type'

export interface ReducerManagerType {
  getReducerMap: () => ReducerListMapObject
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: StateSchemaKeys, reducer: Reducer) => void
  remove: (key: StateSchemaKeys) => void
}
