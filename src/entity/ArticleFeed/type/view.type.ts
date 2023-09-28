import { IconEnum } from 'shared/component/Icon'

import { ArticleFeedViewEnum } from './view.enum'

export interface ArticleFeedView {
  view: ArticleFeedViewEnum
  limitBase: number
  isActive: boolean
  icon: IconEnum
}
