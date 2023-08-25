import { ReactNode } from 'react'

import { ReducerListMapObject, StateSchema } from './state.type'

export interface StoreProviderProps {
  children: ReactNode
  preloadedState?: StateSchema
  asyncReducer?: ReducerListMapObject
}
