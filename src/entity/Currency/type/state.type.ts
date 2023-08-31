import { CurrencyData } from './currency.type'

export interface CurrencyState {
  data?: CurrencyData[]
  isLoading: boolean
  error?: string
}
