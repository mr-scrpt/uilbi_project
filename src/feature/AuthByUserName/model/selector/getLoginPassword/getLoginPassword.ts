import { createSelector } from '@reduxjs/toolkit'

import { getLoginState } from '../getLoginState/getAuthState'

export const getLoginPassword = createSelector(
  getLoginState,
  (login) => login?.password || ''
)
