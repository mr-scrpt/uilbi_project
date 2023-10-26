import { StateSchema } from '@/app/provider/StoreProvider'

export const getArticleFeedIsLoading = (state: StateSchema) =>
  state.articleFeed?.isLoading
