import { ArticleFeedView, ArticleViewEnum } from 'entity/ArticleFeed'
import { HTMLAttributes } from 'react'

export interface FeedViewProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  changeView: (view: ArticleViewEnum) => void
  view: ArticleFeedView[]
}
