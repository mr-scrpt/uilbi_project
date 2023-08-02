import { PreloadeStateType } from 'app/provider/StoreProvider'

import { getCounter } from './getCounter'

describe('Counter', () => {
  test('should return counter value', () => {
    const state: PreloadeStateType = {
      counter: { value: 11 },
    }

    expect(getCounter(state)).toEqual({ value: 11 })
  })
})
