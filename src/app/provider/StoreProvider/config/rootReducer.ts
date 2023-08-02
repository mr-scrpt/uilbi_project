import { combineReducers } from '@reduxjs/toolkit'
import { counterReducer } from 'entity/Counter'

export const rootReducer = combineReducers({
  counter: counterReducer,
})
