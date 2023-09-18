import { ArticleViewEnum } from 'entity/Article/type/view.enum'
import { IconEnum } from 'shared/component/Icon'

import { FeedArticleView } from '../../type/view.type'

export const viewData: FeedArticleView[] = [
  {
    view: ArticleViewEnum.ROW,
    isActive: true,
    icon: IconEnum.VIEW_ROW,
  },
  {
    view: ArticleViewEnum.TILE,
    isActive: false,
    icon: IconEnum.VIEW_TILE,
  },
]
