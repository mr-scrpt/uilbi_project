import { createSelector } from '@reduxjs/toolkit'
import { RoleEnum } from 'shared/type/role/role.enum'

import { getUserAuthData } from '../getUserAuthData/getUserAuthData'

export const getUserRole = createSelector(
  getUserAuthData,
  (authData) => authData?.role
)

export const getUserRoleIsAdmin = createSelector(getUserRole, (role) =>
  Boolean(role?.includes(RoleEnum.ADMIN))
)
export const getUserRoleIsManager = createSelector(getUserRole, (role) =>
  Boolean(role?.includes(RoleEnum.MANAGER))
)
export const getUserRoleIsSimpleUser = createSelector(getUserRole, (role) =>
  Boolean(role?.includes(RoleEnum.USER))
)
