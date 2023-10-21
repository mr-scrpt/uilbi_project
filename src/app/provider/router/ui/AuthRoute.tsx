import { getUserAuthData } from 'entity/User'
import { JSX } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { RoutePath } from 'shared/config/configRouter/configRouter'

import { AuthRouteProps } from '../type/props.type'

export const AuthRoute = ({ children }: AuthRouteProps) => {
  const auth = useSelector(getUserAuthData)
  const location = useLocation()
  if (!auth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />
  }
  return children
}
