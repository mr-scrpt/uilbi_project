import { StateSchema } from 'app/provider/StoreProvider'

import { articleRecomendedAdapter } from '../slice/articleRecomended.slice'

export const getArticleRecomendedData =
  articleRecomendedAdapter.getSelectors<StateSchema>(
    (state) =>
      state.articleRecomended || articleRecomendedAdapter.getInitialState()
  )
