import { CountryData } from './country.type'

export interface CountryState {
  data?: CountryData[]
  isLoading: boolean
  error?: string
}
