import { FC } from 'react'
import { Provider } from 'react-redux'

import { createStore } from '../config/configStore'
import { StoreProviderProps } from '../type/props.type'

export const StoreProvider: FC<StoreProviderProps> = (props) => {
  const { children, preloadedState } = props
  const store = createStore(preloadedState)

  return <Provider store={store}>{children}</Provider>
}
