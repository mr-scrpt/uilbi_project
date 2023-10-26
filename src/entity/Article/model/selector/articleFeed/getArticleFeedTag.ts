import { StateSchema } from '@/app/provider/StoreProvider'

export const getArticleFeedTag = (state: StateSchema) =>
  state.articleFeed?.tag ?? ''
