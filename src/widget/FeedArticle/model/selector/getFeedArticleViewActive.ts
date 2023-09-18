import { StateSchema } from 'app/provider/StoreProvider'

export const getFeedArticleViewActive = (state: StateSchema) =>
  state.feedArticle?.feedView?.find((item) => item.isActive)
