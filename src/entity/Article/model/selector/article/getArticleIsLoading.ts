import { StateSchema } from '@/app/provider/StoreProvider'

export const getArticleIsLoading = (state: StateSchema) =>
  state.article?.isLoading
