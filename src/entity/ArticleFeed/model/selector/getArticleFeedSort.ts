import { StateSchema } from 'app/provider/StoreProvider'
import { ArticleFeedSortFieldEnum } from 'entity/ArticleFeed/type/sort.enum'

export const getArticleFeedSort = (state: StateSchema) =>
  state.articleFeed?.sort ?? ArticleFeedSortFieldEnum.CREATED
