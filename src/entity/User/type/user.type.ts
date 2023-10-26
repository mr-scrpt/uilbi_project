import { RoleEnum } from '@/shared/type/role/role.enum'

export interface User {
  id: string
  username: string
  avatar?: string
  role: RoleEnum[]
}
