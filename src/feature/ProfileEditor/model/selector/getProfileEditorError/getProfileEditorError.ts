import { StateSchema } from '@/app/provider/StoreProvider'

export const getProfileEditorErrors = (state: StateSchema) =>
  state.profileEditor?.validationErrors
