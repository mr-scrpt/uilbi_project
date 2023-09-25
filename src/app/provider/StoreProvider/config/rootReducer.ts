import { counterReducer } from 'entity/Counter'
import { countryReducer } from 'entity/Country'
import { currencyReducer } from 'entity/Currency'
import { modalReducer } from 'entity/Modal'
import { userReducer } from 'entity/User'
import { scrollManagerReducer } from 'feature/ScrollManager'

import { ReducerListMapObject } from '../type/state.type'

//
export const rootReducer: ReducerListMapObject = {
  counter: counterReducer,
  user: userReducer,
  modal: modalReducer,
  country: countryReducer,
  currency: currencyReducer,
  scrollManager: scrollManagerReducer,
}
//
// export const rootReducer = combineReducers(listReducer)

// export const rootReducer = combineReducers({
//   counter: counterReducer,
//   user: userReducer,
//   modal: modalReducer,
//   login: loginReducer,
// })
