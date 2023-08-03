import { DeepPartial } from '@reduxjs/toolkit'

import { rootReducer } from '../config/rootReducer'
import { store } from '../ui/Store'

export type RootStateType = ReturnType<typeof store.getState>
export type PreloadeStateType = ReturnType<typeof rootReducer>
export type PartialStateType = DeepPartial<RootStateType>
