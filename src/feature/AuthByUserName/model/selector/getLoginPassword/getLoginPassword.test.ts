import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema, StateSchemaParital } from 'app/provider/StoreProvider'

import { AuthData } from '../../type/auth.data'
import { getLoginPassword } from './getLoginPassword'

describe('getLoginError', () => {
  test('should return error', () => {
    const state: StateSchemaParital = {
      login: {
        data: { password: 'pass' },
      } as StateSchema['login'],
    }
    expect(getLoginPassword(state as StateSchema)).toEqual('pass')
  })

  test('should work with empty state', () => {
    const state: StateSchemaParital = {}
    expect(getLoginPassword(state as StateSchema)).toEqual('')
  })
})
