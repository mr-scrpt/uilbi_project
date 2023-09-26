import { ArticleSortFieldEnum } from 'entity/ArticleFeed'

import { IFeedSort } from '../type/sort.type'

export const feedSortData: IFeedSort[] = [
  {
    content: 'sort-by-created',
    value: ArticleSortFieldEnum.CREATED,
  },

  {
    content: 'sort-by-title',
    value: ArticleSortFieldEnum.TITLE,
  },
  {
    content: 'sort-by-view',
    value: ArticleSortFieldEnum.VIEWS,
  },
]
