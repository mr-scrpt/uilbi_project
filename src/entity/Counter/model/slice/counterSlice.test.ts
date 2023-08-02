import { CounterState } from '../../type/state.type'
import { counterAction, counterReducer } from './counterSlice'

describe('counterSlice.test', () => {
  test('counterSlice.test decrement', () => {
    const state: CounterState = { value: 11 }

    expect(counterReducer(state, counterAction.decrement())).toEqual({
      value: 10,
    })
  })

  test('counterSlice.test increment', () => {
    const state: CounterState = { value: 11 }

    expect(counterReducer(state, counterAction.increment())).toEqual({
      value: 12,
    })
  })
  test('counterSlice.test should work with empty state', () => {
    expect(counterReducer(undefined, counterAction.increment())).toEqual({
      value: 1,
    })
  })
})
