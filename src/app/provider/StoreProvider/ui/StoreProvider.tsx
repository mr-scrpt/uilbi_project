import { FC } from 'react'
import { Provider } from 'react-redux'

import { createStore } from '../config/configStore'
import { StoreProviderProps } from '../type/props.type'
import { RootStateType } from '../type/state.type'

// import { store } from './Store'

export const StoreProvider: FC<StoreProviderProps> = (props) => {
  const { children, preloadedState } = props
  const store = createStore(preloadedState as RootStateType)

  return <Provider store={store}>{children}</Provider>
}
