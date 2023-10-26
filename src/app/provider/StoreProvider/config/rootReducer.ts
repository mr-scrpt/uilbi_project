import { counterReducer } from '@/entity/Counter'
import { countryReducer } from '@/entity/Country'
import { currencyReducer } from '@/entity/Currency'
import { modalReducer } from '@/entity/Modal'
import { userReducer } from '@/entity/User'
import { scrollManagerReducer } from '@/feature/ScrollManager'
import { rtkApi } from '@/shared/api/rtkApi'

import { ReducerListMapObject } from '../type/state.type'

//
export const rootReducer: ReducerListMapObject = {
  counter: counterReducer,
  user: userReducer,
  modal: modalReducer,
  country: countryReducer,
  currency: currencyReducer,
  scrollManager: scrollManagerReducer,
  [rtkApi.reducerPath]: rtkApi.reducer,
}
//
// export const rootReducer = combineReducers(listReducer)

// export const rootReducer = combineReducers({
//   counter: counterReducer,
//   user: userReducer,
//   modal: modalReducer,
//   login: loginReducer,
// })
