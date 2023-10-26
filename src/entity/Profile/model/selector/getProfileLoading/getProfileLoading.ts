import { StateSchema } from '@/app/provider/StoreProvider'

export const getProfileLoading = (state: StateSchema) =>
  state.profile?.isLoading
