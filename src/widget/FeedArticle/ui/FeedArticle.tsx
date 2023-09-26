import { ArticleViewEnum } from 'entity/Article/type/view.enum'
import { ArticleList } from 'entity/Article/ui/ArticleList/ArticleList'
import { FeedOrderDirection } from 'feature/FeedOrderDirection'
import { FeedSearch } from 'feature/FeedSearch'
import { FeedSort } from 'feature/FeedSort'
import { FeedView } from 'feature/FeedView'
import { MutableRefObject, memo, useCallback, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { Button } from 'shared/component/Button'
import { classNames } from 'shared/lib/classNames'
import { DynamicModuleLoader } from 'shared/lib/component/DynamicModuleLoader/DynamicModuleLoader'
import { ReducerList } from 'shared/lib/component/DynamicModuleLoader/type/props.type'
import { useAppDispatch } from 'shared/lib/component/useAppDispatch'
import { useIntersectionObserver } from 'shared/lib/hook/useIntersection/useIntersection'
import { FeedArticleContorlBar } from 'widget/FeedArticleContorlBar'

import { getFeedArticleData } from '../model/selector/getFeedArticleData'
import { getFeedArticleHasMore } from '../model/selector/getFeedArticleHasMore'
import { getFeedArticleIsLoading } from '../model/selector/getFeedArticleIsLoading'
import { getFeedArticleView } from '../model/selector/getFeedArticleView'
import { getFeedArticleViewActive } from '../model/selector/getFeedArticleViewActive'
import { changeFeedArticleView } from '../model/service/changeFeedArticleView'
import { fetchFeedArticleNextPage } from '../model/service/fetchFeedArticleNextPage'
import { initFeedArticle } from '../model/service/initFeedArticle'
import { feedArticleReducer } from '../model/slice/feedArticle.slice'
import { FeedArticleProps } from '../type/props.type'
import { SortFieldEnum } from '../type/sort.enum'
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
  const hasMore = useSelector(getFeedArticleHasMore)

  const onChangeView = useCallback(
    (view: ArticleViewEnum) => {
      dispatch(changeFeedArticleView(view))
    },
    [dispatch]
  )
  const onChangeSort = useCallback((sort: SortFieldEnum) => {
    dispatch()
  })

  const onLoadNextPage = useCallback(() => {
    if (hasMore) {
      dispatch(fetchFeedArticleNextPage())
    }
  }, [dispatch, hasMore])

  useEffect(() => {
    dispatch(initFeedArticle())
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
          <ArticleList
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
