import { StateSchema, StateSchemaParital } from 'app/provider/StoreProvider'

import { getLoginLoading } from './getLoginLoading'

describe('getLoginError', () => {
  test('should return error', () => {
    const state: StateSchemaParital = {
      login: {
        isLoading: true,
      } as StateSchema['login'],
    }
    expect(getLoginLoading(state as StateSchema)).toEqual(true)
  })

  test('should work with empty state', () => {
    const state: StateSchemaParital = {}
    expect(getLoginLoading(state as StateSchema)).toEqual(false)
  })
})
