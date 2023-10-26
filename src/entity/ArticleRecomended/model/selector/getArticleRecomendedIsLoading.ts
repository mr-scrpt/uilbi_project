import { StateSchema } from '@/app/provider/StoreProvider'

export const getArticleRecomendedIsLoading = (state: StateSchema) =>
  state.articleFeed?.isLoading
