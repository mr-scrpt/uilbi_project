import { ArticleFeed } from 'entity/Article'
import { memo, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames'
import { DynamicModuleLoader } from 'shared/lib/component/DynamicModuleLoader/DynamicModuleLoader'
import { ReducerList } from 'shared/lib/component/DynamicModuleLoader/type/props.type'
import { useAppDispatch } from 'shared/lib/component/useAppDispatch'

import { getArticleRecomendedData } from '../model/selector/getArticleRecomendedData'
import { getArticleRecomendedIsLoading } from '../model/selector/getArticleRecomendedIsLoading'
import { fetchArticleRecomended } from '../model/service/fetchArticleRecomended'
import { articleRecomendedReducer } from '../model/slice/articleRecomended.slice'
import { ArticleRecomendedProps } from '../type/props.type'
import cls from './ArticleRecomended.module.scss'

const reducersList: ReducerList = {
  articleRecomended: articleRecomendedReducer,
}

export const ArticleRecomended = memo((props: ArticleRecomendedProps) => {
  const { className } = props

  const clsArticleRecomended = classNames(
    cls.articleRecomended,
    [className],
    {}
  )

  const dispatch = useAppDispatch()
  const articleList = useSelector(getArticleRecomendedData.selectAll)
  const isLoading = useSelector(getArticleRecomendedIsLoading)

  useEffect(() => {
    dispatch(fetchArticleRecomended())
  }, [dispatch])
  return (
    <DynamicModuleLoader reducerList={reducersList} removeAfterUnmount>
      <ArticleFeed
        className={clsArticleRecomended}
        articleList={articleList}
        isLoading={isLoading}
      />
    </DynamicModuleLoader>
  )
})
