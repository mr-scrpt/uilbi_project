import { StateSchema } from 'app/provider/StoreProvider'
import { ArticleSortFieldEnum } from 'entity/ArticleFeed/type/sort.enum'

export const getArticleFeedSort = (state: StateSchema) =>
  state.articleFeed?.sort ?? ArticleSortFieldEnum.CREATED
