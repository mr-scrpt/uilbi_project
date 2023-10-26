import { StateSchema } from '@/app/provider/StoreProvider'

export const getArticleFeedInited = (state: StateSchema) =>
  state.articleFeed?._inited
