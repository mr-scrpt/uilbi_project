import { StateSchemaKeys } from 'app/provider/StoreProvider'
import { ReduxStoreWithManager } from 'app/provider/StoreProvider/type/store.type'
import { memo, useEffect } from 'react'
import { useStore } from 'react-redux'

import { useAppDispatch } from '../useAppDispatch'
import { DynamicModuleLoaderProps } from './type/props.type'

export const DynamicModuleLoader = memo((props: DynamicModuleLoaderProps) => {
  const { children, reducerList, removeAfterUnmount } = props

  const store = useStore() as ReduxStoreWithManager
  const dispatch = useAppDispatch()

  useEffect(() => {
    const mountedReducers = store.reducerManager.getReducerMap()
    Object.entries(reducerList).forEach(([name, reducer]) => {
      const mounted = mountedReducers[name as StateSchemaKeys]
      if (!mounted) {
        console.log(` + mount reducer ${name}`)
        store.reducerManager.add(name as StateSchemaKeys, reducer)
        dispatch({ type: `@INIT ${name} reducer` })
      }
    })

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducerList).forEach(([name]) => {
          console.log(` - unmount reducer ${name}`)
          store.reducerManager.remove(name as StateSchemaKeys)
          dispatch({ type: `@DESTROY ${name} reducer` })
        })
      }
    }
    // eslint-disable-next-line
  }, [])
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>
})
