import { ITag } from './tag.type'

export interface TagsState {
  data: ITag[]
  isLoading: boolean
  error?: string
}
