import { HTMLAttributes } from 'react'

import { CommentType } from './comment.type'

export interface CommentProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  comment: CommentType
  isLoading?: boolean
}

export interface CommentListProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  commentList?: CommentType[]
  isLoading?: boolean
}
