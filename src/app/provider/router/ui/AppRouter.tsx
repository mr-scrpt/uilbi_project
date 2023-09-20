import { Suspense, memo, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import {
  AppRouterProps,
  routeConfig,
} from 'shared/config/configRouter/configRouter'
import { LoaderContent } from 'widget/LoaderContent'

import { RouterProps } from '../type/props.type'
import { AuthRoute } from './AuthRoute'

export const AppRouter = memo((props: RouterProps) => {
  const { className } = props
  const routeWrapper = useCallback((route: AppRouterProps) => {
    const elem = (
      <Suspense fallback={<LoaderContent />}>{route.element}</Suspense>
    )

    return (
      <Route
        key={route.path}
        path={route.path}
        element={route.authOnly ? <AuthRoute>{elem}</AuthRoute> : elem}
      />
    )
  }, [])

  return (
    <div className={className}>
      <Suspense fallback={<LoaderContent />}>
        <Routes>{Object.values(routeConfig).map(routeWrapper)}</Routes>
      </Suspense>
    </div>
  )
})
