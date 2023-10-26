import { StateSchema } from '@/app/provider/StoreProvider'

import { ArticleFeedSortFieldEnum } from '../../../type'

export const getArticleFeedSort = (state: StateSchema) =>
  state.articleFeed?.sort ?? ArticleFeedSortFieldEnum.CREATED
