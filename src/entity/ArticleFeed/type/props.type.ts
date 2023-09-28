import { IArticle } from 'entity/Article'
import { HTMLAttributes } from 'react'

import { ArticleFeedViewEnum } from './view.enum'

export interface ArticleFeedProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  articleList?: IArticle[]
  view?: ArticleFeedViewEnum
  isLoading?: boolean
  error?: string
}

export interface ArticleFeedSkeletonProps
  extends Pick<ArticleFeedProps, 'className' | 'view'> {}
