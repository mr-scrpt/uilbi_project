import { HTMLAttributes } from 'react'

export interface CommentArticleCreatorProps
  extends HTMLAttributes<HTMLDivElement> {
  className?: string
  slug: string
  userId: string
}
