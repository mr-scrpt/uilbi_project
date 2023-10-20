import {
  ArticleFeed,
  ArticleFeedItem,
  ArticleFeedViewEnum,
  IArticle,
} from 'entity/Article'
import { memo, useCallback, useEffect } from 'react'
// import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames'

// import { DynamicModuleLoader } from 'shared/lib/component/DynamicModuleLoader/DynamicModuleLoader'
// import { ReducerList } from 'shared/lib/component/DynamicModuleLoader/type/props.type'
// import { useAppDispatch } from 'shared/lib/component/useAppDispatch'
import { useArticleRecomended } from '../api/articleRecomended.api'
// import { getArticleRecomendedData } from '../model/selector/getArticleRecomendedData'
// import { getArticleRecomendedIsLoading } from '../model/selector/getArticleRecomendedIsLoading'
// import { fetchArticleRecomended } from '../model/service/fetchArticleRecomended'
// import { articleRecomendedReducer } from '../model/slice/articleRecomended.slice'
import { ArticleRecomendedProps } from '../type/props.type'
import cls from './ArticleRecomended.module.scss'

// const reducersList: ReducerList = {
//   articleRecomended: articleRecomendedReducer,
// }

export const ArticleRecomended = memo((props: ArticleRecomendedProps) => {
  const { className } = props

  const clsArticleRecomended = classNames(
    cls.articleRecomended,
    [className],
    {}
  )
  const clsItem = classNames(cls.item, [cls.item_view], {})

  // const dispatch = useAppDispatch()
  // const articleList = useSelector(getArticleRecomendedData.selectAll)
  // const isLoading = useSelector(getArticleRecomendedIsLoading)
  //
  // useEffect(() => {
  //   dispatch(fetchArticleRecomended())
  // }, [dispatch])

  const { data, isLoading, error } = useArticleRecomended(3)
  const renderFeed = useCallback(
    (item: IArticle) => (
      <ArticleFeedItem
        view={ArticleFeedViewEnum.TILE}
        className={clsItem}
        article={item}
        key={item.id}
      />
    ),
    [clsItem]
  )

  return (
    <ArticleFeed
      className={clsArticleRecomended}
      articleList={data}
      error={error && JSON.stringify(error)}
      isLoading={isLoading}
      renderFeed={renderFeed}
    />
    // <DynamicModuleLoader><DynamicModuleLoader reducerList={reducersList} removeAfterUnmount> */}
    // </DynamicModuleLoader>
  )
})
