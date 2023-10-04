import { ITag } from 'entity/Tags'
import { HTMLAttributes } from 'react'
import { ITab } from 'shared/component/Tab'

export interface FeedTagsProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  tagList?: ITab[]
  active?: string
  onChangeTag?: (value: string) => void
}
