import { StateSchema } from '@/app/provider/StoreProvider'

export const getScrollManagerData = (state: StateSchema) =>
  state.scrollManager.data
