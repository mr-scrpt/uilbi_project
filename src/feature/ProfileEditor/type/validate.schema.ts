import {
  Output,
  endsWith,
  maxValue,
  minLength,
  minValue,
  number,
  object,
  string,
} from 'valibot'

export const ProfileValidateSchema = object({
  firstname: string([minLength(2, 'valdate-profile-error-fistname-length')]),
  // lastname: string([minLength(2, 'valdate-profile-error-fistname-length')]),
  // country: string([minLength(32, 'valdate-profile-error-country-length')]),
  // age: number([
  //   minValue(12, 'valdate-profile-error-age'),
  //   maxValue(120, 'valdate-profile-error-age'),
  // ]),
})

export type ProfileValidateType = Output<typeof ProfileValidateSchema>
