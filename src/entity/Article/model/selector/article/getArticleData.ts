import { StateSchema } from 'app/provider/StoreProvider'

export const getArticleData = (state: StateSchema) => state.article?.data
