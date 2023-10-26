import { StateSchema } from '@/app/provider/StoreProvider'

export const getArticleFeedView = (state: StateSchema) =>
  state.articleFeed?.feedView
