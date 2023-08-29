import { getUserAuthData } from 'entity/User'
import { Suspense, memo, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/configRouter/configRouter'
import { LoaderContent } from 'widget/LoaderContent'

import { RouterProps } from '../type/props.type'

export const AppRouter = memo((props: RouterProps) => {
  const { className } = props
  const isAuth = useSelector(getUserAuthData)

  const routes = useMemo(
    () =>
      Object.values(routeConfig).filter((route) => {
        if (route.authOnly && !isAuth) {
          return false
        }
        return true
      }),
    [isAuth]
  )

  return (
    <div className={className}>
      <Suspense fallback={<LoaderContent />}>
        <Routes>
          {routes.map(({ element, path }) => (
            <Route key={path?.toString()} path={path} element={element} />
          ))}
        </Routes>
      </Suspense>
    </div>
  )
})
