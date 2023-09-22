import { ArticleViewEnum } from 'entity/Article/type/view.enum'
import { IconEnum } from 'shared/component/Icon'

export interface FeedArticleView {
  view: ArticleViewEnum
  limitBase: number
  isActive: boolean
  icon: IconEnum
}
