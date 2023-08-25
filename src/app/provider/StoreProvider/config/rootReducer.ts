import { counterReducer } from 'entity/Counter'
import { modalReducer } from 'entity/Modal'
import { userReducer } from 'entity/User'

import { ReducerListMapObject } from '../type/state.type'

//
export const rootReducer: ReducerListMapObject = {
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
