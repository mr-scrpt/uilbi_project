import { User } from 'entity/User'

export interface CommentType {
  id: string
  user: User
  text: string
}
