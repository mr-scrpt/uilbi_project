import { StateSchema } from 'app/provider/StoreProvider'

export const getCommentCreatorError = (state: StateSchema) =>
  state.commentCreator?.error
