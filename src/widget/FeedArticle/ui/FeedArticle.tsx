import { ArticleViewEnum } from 'entity/Article/type/view.enum'
import { ArticleList } from 'entity/Article/ui/ArticleList/ArticleList'
import { FeedView } from 'feature/FeedView'
import { MutableRefObject, memo, useCallback, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames'
import { DynamicModuleLoader } from 'shared/lib/component/DynamicModuleLoader/DynamicModuleLoader'
import { ReducerList } from 'shared/lib/component/DynamicModuleLoader/type/props.type'
import { useAppDispatch } from 'shared/lib/component/useAppDispatch'
import { useIntersectionObserver } from 'shared/lib/hook/useIntersection/useIntersection'
import { storageFeedView } from 'shared/lib/storage/LocalStorage'

import { getFeedArticleData } from '../model/selector/getFeedArticleData'
import { getFeedArticleHasMore } from '../model/selector/getFeedArticleHasMore'
import { getFeedArticleIsLoading } from '../model/selector/getFeedArticleIsLoading'
import { getFeedArticleLimit } from '../model/selector/getFeedArticleLimit'
import { getFeedArticlePage } from '../model/selector/getFeedArticlePage'
import { getFeedArticleView } from '../model/selector/getFeedArticleView'
import { getFeedArticleViewActive } from '../model/selector/getFeedArticleViewActive'
import { fetchFeedArticle } from '../model/service/fetchFeedArticle'
import { fetchFeedArticleNextPage } from '../model/service/fetchFeedArticleNextPage'
import {
  feedArticleAction,
  feedArticleReducer,
} from '../model/slice/feedArticle.slice'
import { FeedArticleProps } from '../type/props.type'
import cls from './FeedArticle.module.scss'

const reducersList: ReducerList = {
  feedArticle: feedArticleReducer,
}
export const FeedArticle = memo((props: FeedArticleProps) => {
  const { className } = props
  const dispatch = useAppDispatch()
  const articleList = useSelector(getFeedArticleData.selectAll)
  const isLoading = useSelector(getFeedArticleIsLoading)
  const view = useSelector(getFeedArticleView)
  const viewActive = useSelector(getFeedArticleViewActive)
  const pageCurrent = useSelector(getFeedArticlePage)
  const limitCurrent = useSelector(getFeedArticleLimit)
  const hasMore = useSelector(getFeedArticleHasMore)

  const setLimti = (view: ArticleViewEnum) =>
    view === ArticleViewEnum.TILE ? 4 : 2

  const onChangeView = (view: ArticleViewEnum) => {
    console.log('on changeView')
    dispatch(feedArticleAction.setView(view))
    dispatch(feedArticleAction.setLimit(setLimti(view)))
    storageFeedView.setItem(view)
  }

  const onLoadNextPage = useCallback(() => {
    console.log('in scroll', hasMore)
    if (hasMore && !isLoading) {
      console.log('has more lazy load more', limitCurrent)
      const pageNext = pageCurrent + 1
      dispatch(feedArticleAction.setPage(pageNext))
      dispatch(fetchFeedArticle({ page: pageNext, limit: limitCurrent }))
    }
    // dispatch(fetchFeedArticleNextPage())
  }, [dispatch, hasMore, isLoading, limitCurrent, pageCurrent])

  useEffect(() => {
    const initView = storageFeedView.getItem()
    console.log('effect')
    if (initView) {
      dispatch(feedArticleAction.setView(initView))
      dispatch(feedArticleAction.setLimit(setLimti(initView)))
    }
  }, [])

  useEffect(() => {
    if (limitCurrent) {
      console.log('current limit', limitCurrent)
      dispatch(fetchFeedArticle({ page: pageCurrent, limit: limitCurrent }))
    }
  }, [dispatch, pageCurrent, limitCurrent])

  const clsFeedArticle = classNames(cls.feedArticle, [className], {})

  // const targetObserveRef = useRef() as MutableRefObject<HTMLElement>
  // const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
  const targetRef = useRef() as MutableRefObject<HTMLDivElement>
  // const targetRef = useRef<MutableRefObject<HTMLDivElement>>()

  useIntersectionObserver({
    targetRef,
    rootRef: null,
    callback: onLoadNextPage,
  })

  return (
    <DynamicModuleLoader reducerList={reducersList}>
      <div className={clsFeedArticle}>
        {view && (
          <FeedView
            className={cls.view}
            changeView={onChangeView}
            view={view}
          />
        )}
        <ArticleList
          isLoading={isLoading}
          articleList={articleList}
          view={viewActive?.view}
        />
        <div className={cls.end} ref={targetRef}></div>
      </div>
    </DynamicModuleLoader>
  )
})
