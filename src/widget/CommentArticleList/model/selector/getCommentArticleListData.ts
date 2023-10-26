import { StateSchema } from '@/app/provider/StoreProvider'

import { commentsAdapter } from '../slice/commentArticleList.slice'

export const getCommentsArticleList = commentsAdapter.getSelectors<StateSchema>(
  (state) => state.commentAticleList || commentsAdapter.getInitialState()
)
