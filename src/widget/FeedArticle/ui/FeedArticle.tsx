import { ArticleViewEnum } from 'entity/Article/type/view.enum'
import { ArticleList } from 'entity/Article/ui/ArticleList/ArticleList'
import { FeedView } from 'feature/FeedView'
import { memo, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames'
import { DynamicModuleLoader } from 'shared/lib/component/DynamicModuleLoader/DynamicModuleLoader'
import { ReducerList } from 'shared/lib/component/DynamicModuleLoader/type/props.type'
import { useAppDispatch } from 'shared/lib/component/useAppDispatch'
import { storageFeedView } from 'shared/lib/storage/LocalStorage'

import { getFeedArticleData } from '../model/selector/getFeedArticleData'
import { getFeedArticleIsLoading } from '../model/selector/getFeedArticleIsLoading'
import { getFeedArticleView } from '../model/selector/getFeedArticleView'
import { getFeedArticleViewActive } from '../model/selector/getFeedArticleViewActive'
import { fetchFeedArticle } from '../model/service/fetchFeedArticle'
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

  const onChangeView = (view: ArticleViewEnum) => {
    dispatch(feedArticleAction.setView(view))
    storageFeedView.setItem(view)
  }

  useEffect(() => {
    const initView = storageFeedView.getItem()
    if (initView) {
      console.log('dispatch', initView)
      dispatch(feedArticleAction.setView(initView))
    }
  }, [])

  useEffect(() => {
    dispatch(fetchFeedArticle())
  }, [dispatch])

  const clsFeedArticle = classNames(cls.feedArticle, [className], {})
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
      </div>
    </DynamicModuleLoader>
  )
})
