import { Reducer } from '@reduxjs/toolkit'
import { StateSchemaKeys } from 'app/provider/StoreProvider'
import { ReactNode } from 'react'

export type ReducerList = {
  [name in StateSchemaKeys]?: Reducer
}

export type ReducersListEntry = [StateSchemaKeys, Reducer]

export interface DynamicModuleLoaderProps {
  reducerList: ReducerList
  removeAfterUnmount?: boolean
  children: ReactNode
}
