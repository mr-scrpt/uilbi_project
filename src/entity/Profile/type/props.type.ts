import { HTMLAttributes } from 'react'

import { ProfileData } from './profile.data'

export interface ProfileCardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  profile: ProfileData
  isLoading: boolean
  error: string
  isEditable: boolean
  countryList: string[]
  // onChangeFirstName: (e: ChangeEvent<HTMLInputElement>) => void
  onChangeFirstName?: (value: string) => void
  onChangeCountry?: (value: string) => void
  onChangeCurrency?: (value: string) => void
}
