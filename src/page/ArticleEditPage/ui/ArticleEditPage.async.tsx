import { lazy } from 'react'

export const ArticleEditPageAsync = lazy(() =>
  import('./ArticleEditPage').then((module) => ({
    default: module.ArticleEditPage,
  }))
)
