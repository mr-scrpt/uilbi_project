import { StateSchema } from 'app/provider/StoreProvider'

export const getArticleFeedLimitBase = (state: StateSchema) =>
  state.articleFeed?.feedView?.find((item) => item.isActive)?.limitBase
