import { StateSchema } from 'app/provider/StoreProvider'

export const getArticleFeedPage = (state: StateSchema) =>
  state.articleFeed?.page || 1
