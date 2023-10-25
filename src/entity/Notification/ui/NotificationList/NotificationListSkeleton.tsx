import { memo } from 'react'

import { NotificationItemSkeleton } from '../NotificationItem/NotificationItem.skeleton'

export const NotificationListSkeleton = memo(() => (
  <>
    <NotificationItemSkeleton />
    <NotificationItemSkeleton />
    <NotificationItemSkeleton />
  </>
))
