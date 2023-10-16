import { IArticle } from 'entity/Article'
import { ArticleFeedViewEnum } from 'entity/ArticleFeed/type/view.enum'
import { HTMLAttributes } from 'react'

export interface ArticleFeedItemProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  view?: ArticleFeedViewEnum
  article: IArticle
}

export interface ArticleFeedItemSkeletonProps
  extends Omit<ArticleFeedItemProps, 'article'> {}
