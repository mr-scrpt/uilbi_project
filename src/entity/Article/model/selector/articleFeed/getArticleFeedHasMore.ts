import { StateSchema } from '@/app/provider/StoreProvider'

export const getArticleFeedHasMore = (state: StateSchema) =>
  state.articleFeed?.hasMore
