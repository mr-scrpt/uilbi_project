import { PreloadeStateType } from 'app/provider/StoreProvider'

import { getCounterValue } from './getCounterValue'

describe('getCounterValue.test', () => {
  test('getCounterValue.test', () => {
    const state: PreloadeStateType = {
      counter: { value: 11 },
    }

    expect(getCounterValue(state)).toEqual(11)
  })
})
