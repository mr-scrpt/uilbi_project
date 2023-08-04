import { combineReducers } from '@reduxjs/toolkit'
import { counterReducer } from 'entity/Counter'
import { modalReducer } from 'entity/Modal/model/slice/ModalSlice'
import { userReducer } from 'entity/User'

export const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
  modal: modalReducer,
})
