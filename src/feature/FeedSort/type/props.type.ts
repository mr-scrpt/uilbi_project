import { ArticleFeedSortFieldEnum } from 'entity/ArticleFeed'
import { HTMLAttributes } from 'react'

export interface FeedSortProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  sort: ArticleFeedSortFieldEnum
  onChangeSort: (newOrder: ArticleFeedSortFieldEnum) => void
}
