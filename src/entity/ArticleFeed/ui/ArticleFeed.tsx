import { ArticleFeedItem } from 'entity/ArticleFeedItem'
import { memo } from 'react'
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
      </div>
    </div>
  )
})
