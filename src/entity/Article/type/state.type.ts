import { IArticle } from './article.type'

export interface ArticleState {
  data?: IArticle
  isLoading: boolean
  error?: string
}
