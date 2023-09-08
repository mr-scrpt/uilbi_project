import { lazy } from 'react'

export const ArticlePageAsync = lazy(() =>
  import('./ArticlePage').then((module) => ({
    default: module.ArticlePage,
  }))
)
