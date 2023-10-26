import { StateSchema } from '@/app/provider/StoreProvider'

export const getArticleFeedLimit = (state: StateSchema) =>
  state.articleFeed?.limit
