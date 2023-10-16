// import { SortFieldEnum } from 'widget/FeedArticle/type/sort.enum'
import { ArticleFeedSortFieldEnum } from 'entity/ArticleFeed'

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
