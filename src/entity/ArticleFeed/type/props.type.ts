import { IArticle } from 'entity/Article'
import { ArticleProps } from 'entity/Article/type/props.type'
import { ArticleFeedItemProps } from 'entity/ArticleFeedItem/type/props.type'
import { ElementType, FC, HTMLAttributes } from 'react'

import { ArticleFeedViewEnum } from './view.enum'

export interface ArticleFeedProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  articleList?: IArticle[]
  view?: ArticleFeedViewEnum
  isLoading?: boolean
  error?: string
  item?: ElementType<ArticleFeedItemProps>
}

export interface ArticleFeedSkeletonProps
  extends Pick<ArticleFeedProps, 'className' | 'view'> {}
