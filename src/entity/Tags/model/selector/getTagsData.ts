import { StateSchema } from '@/app/provider/StoreProvider'

export const getTagsData = (state: StateSchema) => state.tags?.data
