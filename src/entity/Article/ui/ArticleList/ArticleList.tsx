import { ArticleViewEnum } from 'entity/Article/type/view.enum'
import { memo } from 'react'
import { classNames } from 'shared/lib/classNames'

import { ArticleListProps } from '../../type/props.type'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItem.skeleton'
import cls from './ArticleList.module.scss'

const getSkeletons = (view: ArticleViewEnum, cls: string) =>
  new Array(view === ArticleViewEnum.TILE ? 9 : 3)
    .fill(0)
    .map((item, index) => (
      <ArticleListItemSkeleton className={cls} key={index} view={view} />
    ))

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    articleList,
    isLoading,
    view = ArticleViewEnum.TILE,
  } = props

  const clsFeed = classNames(cls.list, [className], {})
  const clsItem = classNames(cls.item, [cls.item_view], {
    [cls.item_view_tile]: view === ArticleViewEnum.TILE,
    [cls.item_view_row]: view === ArticleViewEnum.ROW,
  })

  return (
    <div className={clsFeed}>
      <div className={cls.inner}>
        {!isLoading && articleList ? (
          articleList.map((item) => (
            <ArticleListItem
              view={view}
              className={clsItem}
              article={item}
              key={item.id}
            />
          ))
        ) : (
          <div>empty</div>
        )}
        {isLoading && getSkeletons(view, clsItem)}
      </div>
    </div>
  )
})
