import { StateSchema, StateSchemaParital } from 'app/provider/StoreProvider'

import { getLoginUserName } from './getLoginUserName'

describe('getLoginError', () => {
  test('should return error', () => {
    const state: StateSchemaParital = {
      login: {
        data: { username: 'user' },
      } as StateSchema['login'],
    }
    expect(getLoginUserName(state as StateSchema)).toEqual('user')
  })

  test('should work with empty state', () => {
    const state: StateSchemaParital = {}
    expect(getLoginUserName(state as StateSchema)).toEqual('')
  })
})
