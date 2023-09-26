import { ArticleOrderEnum } from 'entity/ArticleFeed'

import { IFeedOrderDirection } from '../type/order.type'

export const feedOrderDirectionData: IFeedOrderDirection[] = [
  {
    content: 'order-direction-asc',
    value: ArticleOrderEnum.ASC,
  },
  {
    content: 'order-direction-desc',
    value: ArticleOrderEnum.DESC,
  },
]
