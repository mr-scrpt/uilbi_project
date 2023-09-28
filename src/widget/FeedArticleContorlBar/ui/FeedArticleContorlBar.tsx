import { articleAction } from 'entity/Article/model/slice/articleSlice'
import {
  ArticleOrderEnum,
  ArticleSortFieldEnum,
  ArticleViewEnum,
  articleFeedAction,
  changeFeedArticleView,
  fetchFeedArticle,
  getArticleFeedView,
} from 'entity/ArticleFeed'
import { getArticleFeedOrder } from 'entity/ArticleFeed/model/selector/getArticleFeedOrder'
import { getArticleFeedSearch } from 'entity/ArticleFeed/model/selector/getArticleFeedSearch'
import { getArticleFeedSortField } from 'entity/ArticleFeed/model/selector/getArticleFeedSortField'
import { FeedOrderDirection } from 'feature/FeedOrderDirection'
import { FeedSearch } from 'feature/FeedSearch'
import { FeedSort } from 'feature/FeedSort'
import { FeedView } from 'feature/FeedView'
import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames'
import { useAppDispatch } from 'shared/lib/component/useAppDispatch'

import { FeedArticleContorlBarProps } from '../type/props.type'
import cls from './FeedArticleContorlBar.module.scss'

export const FeedArticleContorlBar = memo(
  (props: FeedArticleContorlBarProps) => {
    const { className } = props
    const view = useSelector(getArticleFeedView)
    const sort = useSelector(getArticleFeedSortField)
    const order = useSelector(getArticleFeedOrder)
    const search = useSelector(getArticleFeedSearch)

    const dispatch = useAppDispatch()

    const onChangeView = useCallback(
      (view: ArticleViewEnum) => {
        dispatch(changeFeedArticleView(view))
      },
      [dispatch]
    )
    const onChangeSort = useCallback(
      (sort: ArticleSortFieldEnum) => {
        dispatch(articleFeedAction.setSort(sort))
      },
      [dispatch]
    )
    const onChangeOrder = useCallback(
      (order: ArticleOrderEnum) => {
        dispatch(articleFeedAction.setOrder(order))
      },
      [dispatch]
    )

    const onChangeSearch = useCallback(
      (search: string) => {
        dispatch(articleFeedAction.setSearch(search))
      },
      [dispatch]
    )

    const clsFeedArticleContorlBar = classNames(
      cls.feedArticleContorlBar,
      [className],
      {}
    )
    return (
      <div className={clsFeedArticleContorlBar}>
        {view && (
          <FeedView
            className={cls.view}
            view={view}
            changeView={onChangeView}
          />
        )}
        <FeedSort onChangeSort={onChangeSort} sort={sort} />
        <FeedOrderDirection onChangeOrder={onChangeOrder} order={order} />
        {/* <FeedOrderDirection /> */}
        <FeedSearch onChangeSearch={onChangeSearch} search={search} />
      </div>
    )
  }
)
