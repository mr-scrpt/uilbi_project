import { StateSchema } from '@/app/provider/StoreProvider'

export const getCommentArticleListIsLoading = (state: StateSchema) =>
  state.commentAticleList?.isLoading
