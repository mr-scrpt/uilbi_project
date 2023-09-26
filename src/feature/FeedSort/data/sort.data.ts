import { SortFieldEnum } from 'widget/FeedArticle/type/sort.enum'

import { IFeedSort } from '../type/sort.type'

export const feedSortData: IFeedSort[] = [
  {
    content: 'sort-by-created',
    value: SortFieldEnum.CREATED,
  },

  {
    content: 'sort-by-title',
    value: SortFieldEnum.TITLE,
  },
  {
    content: 'sort-by-view',
    value: SortFieldEnum.VIEWS,
  },
]
