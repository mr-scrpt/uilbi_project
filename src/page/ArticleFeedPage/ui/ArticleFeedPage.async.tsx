import { lazy } from 'react'

export const ArticleFeedPageAsync = lazy(() =>
  import('./ArticleFeedPage').then((module) => ({
    default: module.ArticleFeedPage,
  }))
)
