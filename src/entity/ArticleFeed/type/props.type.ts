import { IArticle } from 'entity/Article'
import { HTMLAttributes } from 'react'

import { ArticleViewEnum } from './view.enum'

export interface ArticleFeedProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  articleList?: IArticle[]
  view?: ArticleViewEnum
  isLoading?: boolean
  error?: string
}

export interface ArticleFeedSkeletonProps
  extends Pick<ArticleFeedProps, 'className' | 'view'> {}
