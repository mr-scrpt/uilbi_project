import { StateSchema } from 'app/provider/StoreProvider'
import { ArticleOrderEnum } from 'entity/ArticleFeed/type/order.enum'

export const getArticleFeedOrder = (state: StateSchema) =>
  state.articleFeed?.order ?? ArticleOrderEnum.ASC
