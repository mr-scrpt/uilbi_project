import { StateSchema } from '@/app/provider/StoreProvider'

export const getArticleError = (state: StateSchema) => state.article?.error
