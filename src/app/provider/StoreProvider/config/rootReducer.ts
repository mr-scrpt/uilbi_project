import { ReducersMapObject } from '@reduxjs/toolkit'
import { counterReducer } from 'entity/Counter'
import { modalReducer } from 'entity/Modal'
import { userReducer } from 'entity/User'

import { StateSchema } from '../type/state.type'

//
export const rootReducer: ReducersMapObject<StateSchema> = {
  counter: counterReducer,
  user: userReducer,
  modal: modalReducer,
}
//
// export const rootReducer = combineReducers(listReducer)

// export const rootReducer = combineReducers({
//   counter: counterReducer,
//   user: userReducer,
//   modal: modalReducer,
//   login: loginReducer,
// })
