import { getUserRole } from 'entity/User'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { RoutePath } from 'shared/config/configRouter/configRouter'

import { AdminRouteProps } from '../type/props.type'

export const RoleRoute = ({ children, roles }: AdminRouteProps) => {
  const location = useLocation()
  const userRole = useSelector(getUserRole)

  const hasRequiredRole = useMemo(() => {
    if (!roles || !userRole) {
      return true
    }
    return roles?.some((item) => userRole?.includes(item))
  }, [roles, userRole])

  if (!hasRequiredRole) {
    return (
      <Navigate to={RoutePath.forbidden} state={{ from: location }} replace />
    )
  }
  return children
}
