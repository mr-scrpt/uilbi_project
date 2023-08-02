import { ReactNode } from 'react'

import { PreloadeStateType } from './state.type'

export interface StoreProviderProps {
  children: ReactNode
  preloadedState?: PreloadeStateType
}
