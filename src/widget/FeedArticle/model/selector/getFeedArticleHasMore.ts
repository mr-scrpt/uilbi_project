import { StateSchema } from 'app/provider/StoreProvider'

export const getFeedArticleHasMore = (state: StateSchema) =>
  state.feedArticle?.hasMore
