import { Suspense, memo, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import {
  AppRouterProps,
  routeConfig,
} from 'shared/config/configRouter/configRouter'
import { LoaderContent } from 'widget/LoaderContent'

import { RouterProps } from '../type/props.type'
import { AuthRoute } from './AuthRoute'
import { RoleRoute } from './RoleRoute'
import { UserRoute } from './UserRoute'

export const AppRouter = memo((props: RouterProps) => {
  const { className } = props
  const routeWrapper = useCallback((route: AppRouterProps) => {
    const elem = (
      <Suspense fallback={<LoaderContent />}>{route.element}</Suspense>
    )

    if (route.authOnly) {
      return (
        <Route
          key={route.path}
          path={route.path}
          element={<AuthRoute>{elem}</AuthRoute>}
        />
      )
    }

    if (route.userOnly) {
      return (
        <Route
          key={route.path}
          path={route.path}
          element={<UserRoute>{elem}</UserRoute>}
        />
      )
    }

    // if (route.role) {
    //   return (
    //     <Route
    //       key={route.path}
    //       path={route.path}
    //       element={<RoleRoute roles={route.role}>{elem}</RoleRoute>}
    //     />
    //   )
    // }
    //
    // return <Route key={route.path} path={route.path} element={elem} />
    return (
      <Route
        key={route.path}
        path={route.path}
        element={<RoleRoute roles={route.role}>{elem}</RoleRoute>}
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
