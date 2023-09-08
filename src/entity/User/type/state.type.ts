import { User } from './user.type'

export interface UserState {
  authData?: User
  _inited: boolean
}
