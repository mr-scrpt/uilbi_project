import { AxiosInstance } from 'axios'

import { NavigatorType } from './navigator.type'

export interface ThunkExtraArgType {
  api: AxiosInstance
  navigate?: NavigatorType
}

export interface ThunkConfigType<T> {
  rejectValue: T
  extra: ThunkExtraArgType
}
