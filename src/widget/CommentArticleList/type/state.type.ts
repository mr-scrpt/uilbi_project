import { EntityState } from '@reduxjs/toolkit'
import { CommentType } from 'entity/Comment'

export interface CommentArticleListState extends EntityState<CommentType> {
  isLoading?: boolean
  error?: string
}
