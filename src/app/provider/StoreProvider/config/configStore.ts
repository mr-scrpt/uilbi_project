import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from 'entity/Counter'

export const createStore = () =>
  configureStore({
    reducer: {
      counter: counterReducer,
    },
    devTools: __IS_DEV__,
  })
