import { ArticleOrderEnum } from 'entity/ArticleFeed'
import { HTMLAttributes } from 'react'

export interface FeedOrderDirectionProps
  extends HTMLAttributes<HTMLDivElement> {
  className?: string
  order: ArticleOrderEnum
  onChangeOrder: (newOrder: ArticleOrderEnum) => void
}
