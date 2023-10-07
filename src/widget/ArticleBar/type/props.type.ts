import { HTMLAttributes } from 'react'

export interface ArticleBarProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  articleId: string
}
