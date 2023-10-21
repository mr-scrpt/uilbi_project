import { lazy } from 'react'

export const AdminPageAsync = lazy(() =>
  import('./AdminPage').then((module) => ({
    default: module.AdminPage,
  }))
)
