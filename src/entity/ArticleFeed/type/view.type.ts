import { IconEnum } from 'shared/component/Icon'

import { ArticleViewEnum } from './view.enum'

export interface ArticleFeedView {
  view: ArticleViewEnum
  limitBase: number
  isActive: boolean
  icon: IconEnum
}
