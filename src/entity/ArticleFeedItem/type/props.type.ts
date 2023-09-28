import { IArticle } from 'entity/Article'
import { ArticleViewEnum } from 'entity/ArticleFeed'
import { HTMLAttributes } from 'react'

export interface ArticleFeedItemProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  view?: ArticleViewEnum
  article: IArticle
}

export interface ArticleFeedItemSkeletonProps
  extends Omit<ArticleFeedItemProps, 'article'> {}
