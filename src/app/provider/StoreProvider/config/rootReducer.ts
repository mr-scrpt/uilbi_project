import { combineReducers } from '@reduxjs/toolkit'
import { counterReducer } from 'entity/Counter'
import { userReducer } from 'entity/User'

export const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
})
