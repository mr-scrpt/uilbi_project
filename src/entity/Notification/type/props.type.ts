import { HTMLAttributes } from 'react'

import { INotification } from './notification.type'

export interface NotificationItemProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  data: INotification
}

export interface NotificationListProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  data: INotification[]
  isLoading: boolean
  isError: boolean
}

export interface NotificationItemSkeletonProps
  extends HTMLAttributes<HTMLDivElement> {
  className?: string
}
