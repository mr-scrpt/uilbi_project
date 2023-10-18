import { ArticleFeedSortFieldEnum } from 'entity/Article'

import { IFeedSort } from '../type/sort.type'

export const feedSortData: IFeedSort[] = [
  {
    content: 'sort-by-created',
    value: ArticleFeedSortFieldEnum.CREATED,
  },

  {
    content: 'sort-by-title',
    value: ArticleFeedSortFieldEnum.TITLE,
  },
  {
    content: 'sort-by-view',
    value: ArticleFeedSortFieldEnum.VIEWS,
  },
]
