import { HTMLAttributes, JSX } from 'react'
import { RoleEnum } from 'shared/type/role/role.enum'

export interface RouterProps extends HTMLAttributes<HTMLDivElement> {
  classRouter?: string
}

export interface AuthRouteProps {
  children: JSX.Element
}

export interface AdminRouteProps {
  children: JSX.Element
  roles?: RoleEnum[]
}
