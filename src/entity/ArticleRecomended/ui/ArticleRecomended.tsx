import {
  ArticleFeed,
  ArticleFeedItem,
  ArticleFeedViewEnum,
  IArticle,
} from '@/entity/Article'
import { memo, useCallback } from 'react'
import { classNames } from '@/shared/lib/classNames'

import { useArticleRecomended } from '../api/articleRecomended.api'
import { ArticleRecomendedProps } from '../type/props.type'
import cls from './ArticleRecomended.module.scss'

export const ArticleRecomended = memo((props: ArticleRecomendedProps) => {
  const { className } = props

  const clsArticleRecomended = classNames(
    cls.articleRecomended,
    [className],
    {}
  )
  const clsItem = classNames(cls.item, [cls.item_view], {})

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
  )
})
