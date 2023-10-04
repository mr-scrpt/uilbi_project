import { EntityState } from '@reduxjs/toolkit'
import { IArticle } from 'entity/Article'

import { ArticleFeedOrderEnum } from './order.enum'
import { ArticleFeedSortFieldEnum } from './sort.enum'
import { ArticleFeedView } from './view.type'

export interface ArticleFeedState extends EntityState<IArticle> {
  isLoading?: boolean
  error?: string

  feedView?: ArticleFeedView[]
  page: number
  limit: number
  hasMore: boolean

  order: ArticleFeedOrderEnum
  sort: ArticleFeedSortFieldEnum
  tag: string

  search: string
  _inited: boolean
}
