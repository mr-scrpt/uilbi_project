import { IconEnum } from 'shared/component/Icon'

import { ArticleFeedViewEnum } from '../../type/view.enum'
import { ArticleFeedView } from '../../type/view.type'
import { ArticleLimitValue } from './limit.data'

export const viewData: ArticleFeedView[] = [
  {
    view: ArticleFeedViewEnum.ROW,
    limitBase: ArticleLimitValue.ROW,
    isActive: true,
    icon: IconEnum.VIEW_ROW,
  },
  {
    view: ArticleFeedViewEnum.TILE,
    limitBase: ArticleLimitValue.TILE,
    isActive: false,
    icon: IconEnum.VIEW_TILE,
  },
]
