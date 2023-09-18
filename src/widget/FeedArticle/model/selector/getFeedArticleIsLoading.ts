import { StateSchema } from 'app/provider/StoreProvider'

export const getFeedArticleIsLoading = (state: StateSchema) =>
  state.feedArticle?.isLoading
