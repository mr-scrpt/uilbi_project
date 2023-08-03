import { PreloadeStateType } from 'app/provider/StoreProvider'
import { PartialStateType } from 'app/provider/StoreProvider/type/state.type'

import { getCounter } from './getCounter'

describe('Counter', () => {
  test('should return counter value', () => {
    const state: PartialStateType = {
      counter: { value: 11 },
    }

    expect(getCounter(state as PreloadeStateType)).toEqual({ value: 11 })
  })
})
