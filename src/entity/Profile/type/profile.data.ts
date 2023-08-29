import { CountryEnum } from 'shared/const/country.enum'
import { CurrencyEnum } from 'shared/const/currency.enum'

export interface ProfileData {
  firstname?: string
  lastname?: string
  age?: number | null
  currency?: CurrencyEnum | null
  country?: CountryEnum | null
  city?: string
  avatar?: string
  role?: string
}
