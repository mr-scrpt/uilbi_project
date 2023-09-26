import { OrderDirectionEnum } from 'widget/FeedArticle/type/order.enum'

import { IFeedOrderDirection } from '../type/order.type'

export const feedOrderDirectionData: IFeedOrderDirection[] = [
  {
    content: 'order-direction-asc',
    value: OrderDirectionEnum.ASC,
  },
  {
    content: 'order-direction-desc',
    value: OrderDirectionEnum.DESC,
  },
]
