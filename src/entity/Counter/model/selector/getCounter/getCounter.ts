import { StateSchema } from 'app/provider/StoreProvider'

import { CounterState } from '../../../type/state.type'

export const getCounter = (state: StateSchema): CounterState => state.counter
