import { StateSchema } from 'app/provider/StoreProvider'
import { ArticleFeedOrderEnum } from 'entity/ArticleFeed/type/order.enum'

export const getArticleFeedOrder = (state: StateSchema) =>
  state.articleFeed?.order ?? ArticleFeedOrderEnum.ASC
