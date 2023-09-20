import { EntityState } from '@reduxjs/toolkit'
import { IArticle } from 'entity/Article'

import { FeedArticleView } from './view.type'

export interface FeedArticleState extends EntityState<IArticle> {
  isLoading?: boolean
  error?: string

  feedView?: FeedArticleView[]
  page: number
  limit: number
  hasMore: boolean
}
