import { EntityState } from '@reduxjs/toolkit'
import { IArticle } from 'entity/Article'

import { OrderDirectionEnum } from './order.enum'
import { SortFieldEnum } from './sort.enum'
import { FeedArticleView } from './view.type'

export interface FeedArticleState extends EntityState<IArticle> {
  isLoading?: boolean
  error?: string

  feedView?: FeedArticleView[]
  page: number
  limit: number
  hasMore: boolean

  order: OrderDirectionEnum
  sort: SortFieldEnum

  search: string
  _inited: boolean
}
