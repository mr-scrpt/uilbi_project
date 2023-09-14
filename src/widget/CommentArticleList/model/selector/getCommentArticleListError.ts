import { StateSchema } from 'app/provider/StoreProvider'

export const getCommentArticleListError = (state: StateSchema) =>
  state.commentAticleList?.error
