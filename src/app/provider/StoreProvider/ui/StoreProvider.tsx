import { FC } from 'react'
import { Provider } from 'react-redux'

import { StoreProviderProps } from '../type/props.type'
import { store } from './Store'

export const StoreProvider: FC<StoreProviderProps> = (props) => {
  const { children } = props

  return <Provider store={store}>{children}</Provider>
}
