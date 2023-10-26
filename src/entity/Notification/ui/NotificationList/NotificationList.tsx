import { memo } from 'react'
import { classNames } from '@/shared/lib/classNames'

import { NotificationListProps } from '../../type/props.type'
import { NotificationItem } from '../NotificationItem/NotificationItem'
import cls from './NotificationList.module.scss'
import { NotificationListSkeleton } from './NotificationListSkeleton'

export const NotificationList = memo((props: NotificationListProps) => {
  const { className, data, isLoading, isError } = props

  const clsNotification = classNames(cls.notification, [className], {})
  return (
    <div className={clsNotification}>
      <div className={cls.inner}>
        {isLoading && <NotificationListSkeleton />}
        {isError && <div>Error..</div>}
        {data.map((item) => (
          <NotificationItem data={item} className={cls.item} key={item.id} />
        ))}
      </div>
    </div>
  )
})
