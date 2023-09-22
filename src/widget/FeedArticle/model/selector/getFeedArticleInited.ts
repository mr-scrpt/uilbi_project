import { StateSchema } from 'app/provider/StoreProvider'

export const getFeedArticleInited = (state: StateSchema) =>
  state.feedArticle?._inited
