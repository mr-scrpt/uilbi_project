import { HTMLAttributes } from 'react'

import { ArticleFeedViewEnum } from '../../ArticleFeed/type/view.enum'
import {
  IArticle,
  IArticleBlockCode,
  IArticleBlockImg,
  IArticleBlockText,
} from './article.type'

export interface ArticleProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  articleId: string
}

export interface ArticleBlockCodeProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  block: IArticleBlockCode
}

export interface ArticleBlockImgProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  block: IArticleBlockImg
}

export interface ArticleBlockTextProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  block: IArticleBlockText
}

export interface ArticleListProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  articleList?: IArticle[]
  view?: ArticleFeedViewEnum
  isLoading?: boolean
  error?: string
}

export interface ArticleListItemProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  view?: ArticleFeedViewEnum
  article: IArticle
}

export interface ArticleListItemSkeletonProps
  extends Omit<ArticleListItemProps, 'article'> {}
