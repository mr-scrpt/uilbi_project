import { PartialStateType, PreloadeStateType } from 'app/provider/StoreProvider'

import { getCounterValue } from './getCounterValue'

describe('getCounterValue.test', () => {
  test('getCounterValue.test', () => {
    const state: PartialStateType = {
      counter: { value: 11 },
    }

    expect(getCounterValue(state as PreloadeStateType)).toEqual(11)
  })
})
