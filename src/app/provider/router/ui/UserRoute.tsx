import { getUserAuthData } from 'entity/User'
import { useSelector } from 'react-redux'
import { Navigate, useLocation, useParams } from 'react-router-dom'
import { RoutePath } from 'shared/config/configRouter/configRouter'

import { AdminRouteProps } from '../type/props.type'

export const UserRoute = ({ children }: AdminRouteProps) => {
  const location = useLocation()
  const auth = useSelector(getUserAuthData)
  const { id } = useParams<{ id: string }>()

  if (auth && auth.id === id) {
    return children
  }

  return (
    <Navigate to={RoutePath.forbidden} state={{ from: location }} replace />
  )
}
