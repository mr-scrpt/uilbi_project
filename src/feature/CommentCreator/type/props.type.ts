import { HTMLAttributes } from 'react'

export interface CommentCreatorProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  articleId: string
  userId: string
}
