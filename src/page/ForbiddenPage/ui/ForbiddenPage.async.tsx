import { lazy } from 'react'

export const AdminPageAsync = lazy(() =>
  import('./ForbiddenPage').then((module) => ({
    default: module.ForbiddenPage,
  }))
)
