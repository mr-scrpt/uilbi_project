import { StateSchema } from 'app/provider/StoreProvider'

export const getFeedArticleView = (state: StateSchema) =>
  state.feedArticle?.feedView
