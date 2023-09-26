import { ArticleViewEnum } from 'entity/ArticleFeed/type/view.enum'
import { ArticleFeedView } from 'entity/ArticleFeed/type/view.type'
import { IconEnum } from 'shared/component/Icon'

export const viewData: ArticleFeedView[] = [
  {
    view: ArticleViewEnum.ROW,
    limitBase: 4,
    isActive: true,
    icon: IconEnum.VIEW_ROW,
  },
  {
    view: ArticleViewEnum.TILE,
    limitBase: 9,
    isActive: false,
    icon: IconEnum.VIEW_TILE,
  },
]
