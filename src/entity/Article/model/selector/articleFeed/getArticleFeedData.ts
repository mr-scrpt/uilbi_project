import { StateSchema } from 'app/provider/StoreProvider'

import { articleFeedAdapter } from '../../slice'

export const getArticleFeedData = articleFeedAdapter.getSelectors<StateSchema>(
  (state) => {
    console.log('=>>>>>>>>>>>>>> state', state)
    return state.articleFeed || articleFeedAdapter.getInitialState()
  }
)
