import { ArticleFeedItemSkeleton } from 'entity/ArticleFeedItem/ui/ArticleFeedItem.skeleton'
import { FC } from 'react'

import { ArticleLimitValue } from '../model/data/limit.data'
import { ArticleFeedSkeletonProps } from '../type/props.type'
import { ArticleFeedViewEnum } from '../type/view.enum'

export const ArticleFeedSkeleton: FC<ArticleFeedSkeletonProps> = (props) => {
  const { view, className } = props

  const data = new Array(
    view === ArticleFeedViewEnum.TILE
      ? ArticleLimitValue.TILE
      : ArticleLimitValue.ROW
  ).fill(0)

  return (
    <>
      {data.map((item, index) => (
        <ArticleFeedItemSkeleton
          className={className}
          key={index}
          view={view}
        />
      ))}
    </>
  )
}
