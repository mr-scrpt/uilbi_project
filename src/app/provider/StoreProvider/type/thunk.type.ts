import { AxiosInstance } from 'axios'

import { StateSchema } from './state.type'

export interface ThunkExtraArgType {
  api: AxiosInstance
}

export interface ThunkConfigType<T> {
  rejectValue: T
  extra: ThunkExtraArgType
  state: StateSchema
}
