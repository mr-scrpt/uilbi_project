import { StateSchema, StateSchemaParital } from 'app/provider/StoreProvider'

import { getLoginState } from './getAuthState'

describe('getLoginError', () => {
  test('should return error', () => {
    const state: StateSchemaParital = {
      login: {
        error: 'error',
        isLoading: true,
        password: 'pass',
        username: 'user',
      },
    }
    expect(getLoginState(state as StateSchema)).toEqual({
      error: 'error',
      isLoading: true,
      password: 'pass',
      username: 'user',
    })
  })

  test('should work with empty state', () => {
    const state: StateSchemaParital = {}
    expect(getLoginState(state as StateSchema)).toEqual(undefined)
  })
})
