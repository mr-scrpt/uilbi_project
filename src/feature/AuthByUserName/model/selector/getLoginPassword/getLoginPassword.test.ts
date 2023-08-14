import { StateSchema, StateSchemaParital } from 'app/provider/StoreProvider'

import { getLoginPassword } from './getLoginPassword'

describe('getLoginError', () => {
  test('should return error', () => {
    const state: StateSchemaParital = {
      login: {
        password: 'pass',
      },
    }
    expect(getLoginPassword(state as StateSchema)).toEqual('pass')
  })

  test('should work with empty state', () => {
    const state: StateSchemaParital = {}
    expect(getLoginPassword(state as StateSchema)).toEqual('')
  })
})
