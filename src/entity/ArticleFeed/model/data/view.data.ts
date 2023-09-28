import { IconEnum } from 'shared/component/Icon'

import { ArticleViewEnum } from '../../type/view.enum'
import { ArticleFeedView } from '../../type/view.type'
import { ArticleLimitValue } from './limit.data'

export const viewData: ArticleFeedView[] = [
  {
    view: ArticleViewEnum.ROW,
    limitBase: ArticleLimitValue.ROW,
    isActive: true,
    icon: IconEnum.VIEW_ROW,
  },
  {
    view: ArticleViewEnum.TILE,
    limitBase: ArticleLimitValue.TILE,
    isActive: false,
    icon: IconEnum.VIEW_TILE,
  },
]
