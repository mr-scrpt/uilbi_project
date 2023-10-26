import { StateSchema } from '@/app/provider/StoreProvider'

export const getArticleFeedError = (state: StateSchema) =>
  state.articleFeed?.error
