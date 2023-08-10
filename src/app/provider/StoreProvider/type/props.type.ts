import { ReducersMapObject } from '@reduxjs/toolkit'
import { ReactNode } from 'react'

import { ReducerPartial, StateSchema } from './state.type'

export interface StoreProviderProps {
  children: ReactNode
  preloadedState?: StateSchema
  asyncReducer?: ReducersMapObject<StateSchema>
}
