import { HTMLAttributes } from 'react'
import { SortFieldEnum } from 'widget/FeedArticle/type/sort.enum'

export interface FeedSortProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  sort: SortFieldEnum
  onChangeSort: (newOrder: SortFieldEnum) => void
}
