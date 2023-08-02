import { RootStateType } from 'app/provider/StoreProvider'

export const getCounter = (state: RootStateType) => state.counter
