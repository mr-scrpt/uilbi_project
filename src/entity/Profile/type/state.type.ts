import { ProfileData } from './profile.data'

export interface ProfileState {
  data?: ProfileData
  isLoading: boolean
  error?: string
  readonly: boolean
}
