import { StateSchema, StateSchemaParital } from 'app/provider/StoreProvider'

import { getLoginError } from './getLoginError'

describe('getLoginError', () => {
  test('should return error', () => {
    const state: StateSchemaParital = {
      login: {
        error: 'error',
      },
    }
    expect(getLoginError(state as StateSchema)).toEqual('error')
  })

  test('should work with empty state', () => {
    const state: StateSchemaParital = {}
    expect(getLoginError(state as StateSchema)).toEqual(null)
  })
})
