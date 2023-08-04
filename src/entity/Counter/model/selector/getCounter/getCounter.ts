import { RootStateType } from 'app/provider/StoreProvider'

import { CounterState } from '../../../type/state.type'

export const getCounter = (state: RootStateType): CounterState => state.counter
