import { FC } from 'react'
import { Provider } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { createStore } from '../config/configStore'
import { StoreProviderProps } from '../type/props.type'

export const StoreProvider: FC<StoreProviderProps> = (props) => {
  const { children, preloadedState, asyncReducer } = props
  const navigate = useNavigate()

  const store = createStore(preloadedState, asyncReducer, navigate)

  return <Provider store={store}>{children}</Provider>
}
