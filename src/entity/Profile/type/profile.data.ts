import { CountryEnum } from 'shared/const/country.enum'
import { CurrencyEnum } from 'shared/const/currency.enum'

export interface ProfileData {
  firstname: string
  lastname: string
  age: number
  currency: CurrencyEnum
  country: CountryEnum
  city: string
  username: string
}
