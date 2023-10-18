import { StateSchema } from 'app/provider/StoreProvider'

export const getArticleFeedSearch = (state: StateSchema) =>
  state.articleFeed?.search ?? ''
