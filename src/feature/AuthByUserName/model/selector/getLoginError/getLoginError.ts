import { createSelector } from '@reduxjs/toolkit'

import { getLoginState } from '../getLoginState/getAuthState'

export const getLoginError = createSelector(
  getLoginState,
  (login) => login?.error || ''
)
