import { createSelector } from '@reduxjs/toolkit'

import { getLoginState } from '../getLoginState/getAuthState'

export const getLoginUserName = createSelector(
  getLoginState,
  (login) => login?.username || ''
)
