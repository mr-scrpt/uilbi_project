import { EntityState } from '@reduxjs/toolkit'
import { IArticle } from 'entity/Article'

export interface ArticleRecomendedState extends EntityState<IArticle> {
  isLoading?: boolean
  error?: string

  limit: number
  _inited: boolean
}
