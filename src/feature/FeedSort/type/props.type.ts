import { ArticleSortFieldEnum } from 'entity/ArticleFeed'
import { HTMLAttributes } from 'react'

export interface FeedSortProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  sort: ArticleSortFieldEnum
  onChangeSort: (newOrder: ArticleSortFieldEnum) => void
}
