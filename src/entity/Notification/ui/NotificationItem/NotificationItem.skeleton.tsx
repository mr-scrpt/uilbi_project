import { memo } from 'react'
import { Skeleton } from 'shared/component/Skeleton'
import { classNames } from 'shared/lib/classNames'

import { NotificationItemSkeletonProps } from '../../type/props.type'
import cls from './NotificationItem.module.scss'

export const NotificationItemSkeleton = memo(
  (props: NotificationItemSkeletonProps) => {
    const { className } = props
    const clsNotification = classNames(cls.notification, [className], {})
    return (
      <Skeleton className={clsNotification}>
        <div className={cls.inner}>
          <Skeleton className={cls.title} />
          <Skeleton className={cls.paragraph} />
        </div>
      </Skeleton>
    )
  }
)
