import { ArticleFeedView, ArticleFeedViewEnum } from '@/entity/Article'
import { HTMLAttributes } from 'react'

export interface FeedViewProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  changeView: (view: ArticleFeedViewEnum) => void
  view: ArticleFeedView[]
}
