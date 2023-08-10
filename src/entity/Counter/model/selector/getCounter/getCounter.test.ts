import { StateSchema, StateSchemaParital } from 'app/provider/StoreProvider'

import { getCounter } from './getCounter'

describe('Counter', () => {
  test('should return counter value', () => {
    const state: StateSchemaParital = {
      counter: { value: 11 },
    }

    expect(getCounter(state as StateSchema)).toEqual({ value: 11 })
  })
})
