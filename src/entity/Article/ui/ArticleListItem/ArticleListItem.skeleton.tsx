import { ArticleListItemSkeletonProps } from 'entity/Article/type/props.type'
import { ArticleViewEnum } from 'entity/ArticleFeed'
import { memo } from 'react'
import { Card } from 'shared/component/Card'
import { Skeleton } from 'shared/component/Skeleton'
import { classNames } from 'shared/lib/classNames'

import cls from './ArticleListItem.module.scss'

export const ArticleListItemSkeleton = memo(
  (props: ArticleListItemSkeletonProps) => {
    const { className, view = ArticleViewEnum.TILE } = props

    const clsCard = classNames(cls.card, [className], {})

    let articleContent

    if (view === ArticleViewEnum.ROW) {
      articleContent = (
        <Skeleton className={cls.inner}>
          <div className={cls.header}>
            <Skeleton
              className={cls.avatar}
              height={24}
              width={24}
              borderRadius="50%"
            />

            <Skeleton className={cls.author} height={24} />
            <Skeleton className={cls.date} height={24} />
          </div>
          <Skeleton className={cls.title} height={24} />
          <div className={cls.imgbox}>
            <Skeleton
              className={cls.imgrow}
              height={200}
              width={200}
              maxWidth={200}
              borderRadius={20}
            />
          </div>
          <Skeleton className={cls.content} height={120} />
          <div className={cls.footer}>
            <Skeleton height={24} width={100} />
            <Skeleton height={24} width={70} />
          </div>
        </Skeleton>
      )
    }

    if (view === ArticleViewEnum.TILE) {
      articleContent = (
        <Skeleton className={cls.inner}>
          <div className={cls.imgbox}>
            <Skeleton height={200} width={200} borderRadius={20} />
          </div>
          <div className={cls.content}>
            <div className={cls.media}>
              <Skeleton className={cls.taglist} height={24} width={150} />
              <Skeleton height={24} width={100} />
            </div>

            <Skeleton height={28} className={cls.title} />
          </div>
        </Skeleton>
      )
    }

    return <Card className={clsCard}>{articleContent}</Card>
  }
)
