import {
  ArticleFeed,
  ArticleFeedItem,
  ArticleFeedViewEnum,
  IArticle,
  articleFeedReducer,
  fetchArticleFeedNextPage,
  getArticleFeedData,
  getArticleFeedHasMore,
  getArticleFeedIsLoading,
  getArticleViewFeedActive,
  initArticleFeed,
} from 'entity/Article'
import { MutableRefObject, memo, useCallback, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { Button } from 'shared/component/Button'
import { classNames } from 'shared/lib/classNames'
import { DynamicModuleLoader } from 'shared/lib/component/DynamicModuleLoader/DynamicModuleLoader'
import { ReducerList } from 'shared/lib/component/DynamicModuleLoader/type/props.type'
import { useAppDispatch } from 'shared/lib/component/useAppDispatch'
import { useIntersectionObserver } from 'shared/lib/hook/useIntersection/useIntersection'
import { FeedArticleContorlBar } from 'widget/FeedArticleContorlBar'

import { FeedArticleProps } from '../type/props.type'
import cls from './FeedArticle.module.scss'

const reducersList: ReducerList = {
  articleFeed: articleFeedReducer,
}
export const FeedArticle = memo((props: FeedArticleProps) => {
  const { className } = props
  const dispatch = useAppDispatch()
  const articleList = useSelector(getArticleFeedData.selectAll)
  const isLoading = useSelector(getArticleFeedIsLoading)
  const viewActive = useSelector(getArticleViewFeedActive)
  const hasMore = useSelector(getArticleFeedHasMore)
  const [searchParams] = useSearchParams()

  const onLoadNextPage = useCallback(() => {
    if (hasMore) {
      dispatch(fetchArticleFeedNextPage())
    }
  }, [dispatch, hasMore])

  useEffect(() => {
    dispatch(initArticleFeed(searchParams))
  }, [dispatch, searchParams])

  const targetRef = useRef() as MutableRefObject<HTMLDivElement>

  useIntersectionObserver({
    targetRef,
    rootRef: null,
    callback: onLoadNextPage,
  })
  const clsFeedArticle = classNames(cls.feedArticle, [className], {})
  // const clsFeedItem = classNames(cls.feedItem, [], {})
  const clsItem = classNames(cls.item, [cls.item_view], {
    [cls.item_view_tile]: viewActive?.view === ArticleFeedViewEnum.TILE,
    [cls.item_view_row]: viewActive?.view === ArticleFeedViewEnum.ROW,
  })

  const renderFeed = useCallback(
    (item: IArticle) => (
      <ArticleFeedItem
        view={viewActive?.view}
        className={clsItem}
        article={item}
        key={item.id}
      />
    ),
    [clsItem, viewActive?.view]
  )

  return (
    <DynamicModuleLoader reducerList={reducersList}>
      <div className={clsFeedArticle}>
        <div className={cls.inner}>
          <FeedArticleContorlBar className={cls.widget} />
          <Button onClick={onLoadNextPage}>Next</Button>
          <ArticleFeed
            isLoading={isLoading}
            articleList={articleList}
            view={viewActive?.view}
            className={cls.list}
            renderFeed={renderFeed}
          />
          <div className={cls.end} ref={targetRef}></div>
        </div>
      </div>
    </DynamicModuleLoader>
  )
})
