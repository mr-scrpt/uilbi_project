import { StateSchema } from 'app/provider/StoreProvider'

export const getUserIsInited = (state: StateSchema) => state.user?._inited
