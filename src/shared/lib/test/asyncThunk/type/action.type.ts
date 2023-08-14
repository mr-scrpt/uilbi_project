import { AsyncThunkAction } from '@reduxjs/toolkit'

export type ActionCreatorType<Return, Arg, RejectedValue> = (
  arg: Arg
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>
