import { FC } from 'react'

import { ArticleLimitValue } from '../../model/data/limit.data'
import { ArticleFeedSkeletonProps, ArticleFeedViewEnum } from '../../type'
import { ArticleFeedItemSkeleton } from '../ArticleFeedItem/ArticleFeedItem.skeleton'

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
