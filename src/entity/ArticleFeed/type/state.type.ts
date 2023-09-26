import { EntityState } from '@reduxjs/toolkit'
import { IArticle } from 'entity/Article'

import { ArticleOrderEnum } from './order.enum'
import { ArticleSortFieldEnum } from './sort.enum'
import { ArticleFeedView } from './view.type'

export interface ArticleFeedState extends EntityState<IArticle> {
  isLoading?: boolean
  error?: string

  feedView?: ArticleFeedView[]
  page: number
  limit: number
  hasMore: boolean

  order: ArticleOrderEnum
  sort: ArticleSortFieldEnum

  search: string
  _inited: boolean
}
