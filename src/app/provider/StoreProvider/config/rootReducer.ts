import { combineReducers } from '@reduxjs/toolkit'
import { counterReducer } from 'entity/Counter'
import { modalReducer } from 'entity/Modal'
import { userReducer } from 'entity/User'
import { loginReducer } from 'feature/AuthByUserName'

export const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
  modal: modalReducer,
  login: loginReducer,
})
