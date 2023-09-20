import { StateSchema } from 'app/provider/StoreProvider'

export const getFeedArticlePage = (state: StateSchema) =>
  state.feedArticle?.page || 1
