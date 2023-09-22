import { StateSchema } from 'app/provider/StoreProvider'

export const getFeedArticleLimitBase = (state: StateSchema) =>
  state.feedArticle?.feedView?.find((item) => item.isActive)?.limitBase
