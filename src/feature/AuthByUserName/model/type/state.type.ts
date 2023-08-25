import { AuthData } from './auth.data'

export interface AuthState {
  data: AuthData
  isLoading: boolean
  error?: string
}
