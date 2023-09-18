import { StateSchema } from 'app/provider/StoreProvider'

export const getFeedArticleError = (state: StateSchema) =>
  state.feedArticle?.error
