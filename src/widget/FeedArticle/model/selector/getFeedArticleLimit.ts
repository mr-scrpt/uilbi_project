import { StateSchema } from 'app/provider/StoreProvider'

export const getFeedArticleLimit = (state: StateSchema) =>
  state.feedArticle?.limit
