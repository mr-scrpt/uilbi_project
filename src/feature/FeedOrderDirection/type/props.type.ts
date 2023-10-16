import { ArticleFeedOrderEnum } from 'entity/ArticleFeed'
import { HTMLAttributes } from 'react'

export interface FeedOrderDirectionProps
  extends HTMLAttributes<HTMLDivElement> {
  className?: string
  order: ArticleFeedOrderEnum
  onChangeOrder: (newOrder: ArticleFeedOrderEnum) => void
}
