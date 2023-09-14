import { StateSchema } from 'app/provider/StoreProvider'

export const getCommentCreatorData = (state: StateSchema) =>
  state.commentCreator?.text || ''
