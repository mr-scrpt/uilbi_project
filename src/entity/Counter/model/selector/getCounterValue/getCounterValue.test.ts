import { StateSchema, StateSchemaParital } from 'app/provider/StoreProvider'

import { getCounterValue } from './getCounterValue'

describe('getCounterValue.test', () => {
  test('getCounterValue.test', () => {
    const state: StateSchemaParital = {
      counter: { value: 11 },
    }

    expect(getCounterValue(state as StateSchema)).toEqual(11)
  })
})
