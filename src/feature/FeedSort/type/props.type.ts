import { ArticleFeedSortFieldEnum } from 'entity/Article'
import { HTMLAttributes } from 'react'

export interface FeedSortProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  sort: ArticleFeedSortFieldEnum
  onChangeSort: (newOrder: ArticleFeedSortFieldEnum) => void
}
