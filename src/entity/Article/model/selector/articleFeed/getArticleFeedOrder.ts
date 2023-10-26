import { StateSchema } from '@/app/provider/StoreProvider'

import { ArticleFeedOrderEnum } from '../../../type'

export const getArticleFeedOrder = (state: StateSchema) =>
  state.articleFeed?.order ?? ArticleFeedOrderEnum.ASC
