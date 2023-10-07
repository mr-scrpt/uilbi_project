import { lazy } from 'react'

export const ArticleCreatePageAsync = lazy(() =>
  import('./ArticleCreatePage').then((module) => ({
    default: module.ArticleCreatePage,
  }))
)
