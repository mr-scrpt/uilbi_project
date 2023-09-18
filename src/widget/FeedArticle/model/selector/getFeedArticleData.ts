import { StateSchema } from 'app/provider/StoreProvider'

import { feedArticleAdapter } from '../slice/feedArticle.slice'

export const getFeedArticleData = feedArticleAdapter.getSelectors<StateSchema>(
  (state) => state.feedArticle || feedArticleAdapter.getInitialState()
)
