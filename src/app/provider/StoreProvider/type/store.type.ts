import { EnhancedStore } from '@reduxjs/toolkit'

import { ReducerManagerType } from './reducerManager.type'
import { StateSchema } from './state.type'

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManagerType
}
