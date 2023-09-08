import { HTMLAttributes } from 'react'

import {
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
