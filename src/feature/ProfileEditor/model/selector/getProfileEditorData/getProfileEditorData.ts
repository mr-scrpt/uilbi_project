import { StateSchema } from 'app/provider/StoreProvider'

export const getProfileEditorData = (state: StateSchema) =>
  state.profileEditor?.data
