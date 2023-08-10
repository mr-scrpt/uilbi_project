import { createSelector } from '@reduxjs/toolkit'

import { getLoginState } from '../getLoginState/getAuthState'

export const getLoginLoading = createSelector(
  getLoginState,
  (login) => login?.isLoading || false
)
