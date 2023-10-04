import { ArticleFeedItem } from 'entity/ArticleFeedItem'
import { memo, useTransition } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames'

import { ArticleFeedProps } from '../type/props.type'
import { ArticleFeedViewEnum } from '../type/view.enum'
import cls from './ArticleFeed.module.scss'
import { ArticleFeedSkeleton } from './ArticleFeed.skeleton'

export const ArticleFeed = memo((props: ArticleFeedProps) => {
  const {
    className,
    articleList,
    isLoading,
    view = ArticleFeedViewEnum.TILE,
  } = props

  const clsFeed = classNames(cls.list, [className], {})
  const clsItem = classNames(cls.item, [cls.item_view], {
    [cls.item_view_tile]: view === ArticleFeedViewEnum.TILE,
    [cls.item_view_row]: view === ArticleFeedViewEnum.ROW,
  })

  const { t } = useTranslation()

  return (
    <div className={clsFeed}>
      <div className={cls.inner}>
        {articleList &&
          articleList.map((item) => (
            <ArticleFeedItem
              view={view}
              className={clsItem}
              article={item}
              key={item.id}
            />
          ))}
        {isLoading && <ArticleFeedSkeleton view={view} className={clsItem} />}
        {!isLoading && !articleList?.length && (
          <span>{t('not-article-found')}</span>
        )}
      </div>
    </div>
  )
})
