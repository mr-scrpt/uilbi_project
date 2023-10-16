import { ArticleFeedOrderEnum } from 'entity/ArticleFeed'

import { IFeedOrderDirection } from '../type/order.type'

export const feedOrderDirectionData: IFeedOrderDirection[] = [
  {
    content: 'order-direction-asc',
    value: ArticleFeedOrderEnum.ASC,
  },
  {
    content: 'order-direction-desc',
    value: ArticleFeedOrderEnum.DESC,
  },
]
