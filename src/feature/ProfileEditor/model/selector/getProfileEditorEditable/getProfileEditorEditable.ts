import { StateSchema } from 'app/provider/StoreProvider'

export const getProfileEditorEditable = (state: StateSchema) =>
  state.profileEditor?.editable
