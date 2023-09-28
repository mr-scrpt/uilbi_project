import {
  ArticleFeed,
  articleFeedReducer,
  fetchArticleFeedNextPage,
  getArticleFeedData,
  getArticleFeedHasMore,
  getArticleFeedIsLoading,
  getArticleFeedView,
  getArticleViewFeedActive,
} from 'entity/ArticleFeed'
import { initArticleFeed } from 'entity/ArticleFeed/model/service/initArticleFeed'
import { MutableRefObject, memo, useCallback, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
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

  const onLoadNextPage = useCallback(() => {
    if (hasMore) {
      dispatch(fetchArticleFeedNextPage())
    }
  }, [dispatch, hasMore])

  useEffect(() => {
    dispatch(initArticleFeed())
  }, [dispatch])

  const targetRef = useRef() as MutableRefObject<HTMLDivElement>

  useIntersectionObserver({
    targetRef,
    rootRef: null,
    callback: onLoadNextPage,
  })
  const clsFeedArticle = classNames(cls.feedArticle, [className], {})

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
          />
          <div className={cls.end} ref={targetRef}></div>
        </div>
      </div>
    </DynamicModuleLoader>
  )
})
