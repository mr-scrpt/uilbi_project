import {
  ArticleFeedOrderEnum,
  ArticleFeedSortFieldEnum,
  ArticleFeedViewEnum,
  articleFeedAction,
  changeArticleFeedTag,
  changeArticleFeedView,
  getArticleFeedSort,
  getArticleFeedView,
} from 'entity/ArticleFeed'
import { getArticleFeedOrder } from 'entity/ArticleFeed/model/selector/getArticleFeedOrder'
import { getArticleFeedSearch } from 'entity/ArticleFeed/model/selector/getArticleFeedSearch'
import { getArticleFeedTag } from 'entity/ArticleFeed/model/selector/getArticleFeedTag'
import { changeArticleFeedOrder } from 'entity/ArticleFeed/model/service/changeArticleFeedOrder'
import { changeArticleFeedSearch } from 'entity/ArticleFeed/model/service/changeArticleFeedSearch'
import { changeArticleFeedSort } from 'entity/ArticleFeed/model/service/changeArticleFeedSort'
import { getTagsData } from 'entity/Tags'
import { fetchTagsData } from 'entity/Tags/model/service/fetchTagsData'
import { FeedOrderDirection } from 'feature/FeedOrderDirection'
import { FeedSearch } from 'feature/FeedSearch'
import { FeedSort } from 'feature/FeedSort'
import { FeedTags } from 'feature/FeedTags'
import { FeedView } from 'feature/FeedView'
import { memo, useCallback, useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames'
import { useAppDispatch } from 'shared/lib/component/useAppDispatch'
import { useDebounce } from 'shared/lib/hook/useDebounce/useDebounce'

import { FeedArticleContorlBarProps } from '../type/props.type'
import cls from './FeedArticleContorlBar.module.scss'

export const FeedArticleContorlBar = memo(
  (props: FeedArticleContorlBarProps) => {
    const { className } = props

    const clsFeedArticleContorlBar = classNames(
      cls.feedArticleContorlBar,
      [className],
      {}
    )

    const view = useSelector(getArticleFeedView)
    const sort = useSelector(getArticleFeedSort)
    const order = useSelector(getArticleFeedOrder)
    const search = useSelector(getArticleFeedSearch)
    const tags = useSelector(getTagsData)
    const TagActive = useSelector(getArticleFeedTag)

    const dispatch = useAppDispatch()

    useEffect(() => {
      dispatch(fetchTagsData())
    }, [dispatch])

    const onChangeView = useCallback(
      (view: ArticleFeedViewEnum) => {
        dispatch(changeArticleFeedView(view))
      },
      [dispatch]
    )
    const onChangeSort = useCallback(
      (sort: ArticleFeedSortFieldEnum) => {
        dispatch(changeArticleFeedSort(sort))
      },
      [dispatch]
    )
    const onChangeOrder = useCallback(
      (order: ArticleFeedOrderEnum) => {
        dispatch(changeArticleFeedOrder(order))
      },
      [dispatch]
    )

    const debounceSearch = useDebounce((search: string) => {
      dispatch(changeArticleFeedSearch(search))
    }, 500)

    const onDebounceUpdate = useCallback(
      (search: string) => debounceSearch(search),
      [debounceSearch]
    )
    const onChangeSearch = useCallback(
      (search: string) => {
        dispatch(articleFeedAction.setSearch(search))
        onDebounceUpdate(search)
      },
      [dispatch, onDebounceUpdate]
    )
    const onChangeTag = useCallback(
      (tag: string) => {
        dispatch(changeArticleFeedTag(tag))
      },
      [dispatch]
    )

    const tagsList = useMemo(
      () => tags?.map((item) => ({ value: item.id, name: item.name })),
      [tags]
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
        <FeedSearch onChangeSearch={onChangeSearch} search={search} />
        <FeedTags
          onChangeTag={onChangeTag}
          tagList={tagsList}
          active={TagActive}
        />
      </div>
    )
  }
)
