import { StateSchema } from 'app/provider/StoreProvider'

import { articleFeedAdapter } from '../slice/articleFeed.slice'

export const getArticleFeedData = articleFeedAdapter.getSelectors<StateSchema>(
  (state) => state.articleFeed || articleFeedAdapter.getInitialState()
)
