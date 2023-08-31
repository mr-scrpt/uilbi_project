import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit'
import { CounterState } from 'entity/Counter'
import { CountryState } from 'entity/Country'
import { CurrencyState } from 'entity/Currency/type/state.type'
import { ModalState } from 'entity/Modal'
import { ProfileState } from 'entity/Profile'
import { UserState } from 'entity/User'
import { AuthState } from 'feature/AuthByUserName'
import { ProfileEditorState } from 'feature/ProfileEditor'

// import { rootReducer } from '../config/rootReducer'
// import { store } from '../config/store'

// export type RootStateType = ReturnType<typeof store.getState>
// export type PreloadeStateType = ReturnType<typeof rootReducer>
// export type PartialStateType = DeepPartial<RootStateType>
// export type StateKey = keyof PreloadeStateType

export interface StateSchema {
  counter: CounterState
  user: UserState
  modal: ModalState
  country: CountryState
  currency: CurrencyState

  login?: AuthState
  profile?: ProfileState
  profileEditor?: ProfileEditorState
}
export type StateSchemaParital = DeepPartial<StateSchema>
export type ReducerListMapObject = ReducersMapObject<StateSchema>
export type ReducerPartial = DeepPartial<ReducerListMapObject>

export type StateSchemaKeys = keyof StateSchema
