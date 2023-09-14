import { HTMLAttributes } from 'react'

export interface CommentArticleListProps
  extends HTMLAttributes<HTMLDivElement> {
  className?: string
  slug: string
}
