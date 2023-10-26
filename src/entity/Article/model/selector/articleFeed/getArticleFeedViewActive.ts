import { StateSchema } from '@/app/provider/StoreProvider'

export const getArticleViewFeedActive = (state: StateSchema) =>
  state.articleFeed?.feedView?.find((item) => item.isActive)
