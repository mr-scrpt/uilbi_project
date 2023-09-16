import { Skeleton } from 'shared/component/Skeleton'
import { classNames } from 'shared/lib/classNames'

import cls from './Skeleton.module.scss'

export const CommentSkeleton = () => {
  const clsCommentskeleton = classNames(cls.comment)
  return (
    <Skeleton className={clsCommentskeleton}>
      <Skeleton className={cls.avatar} />
      <Skeleton className={cls.body} />
    </Skeleton>
  )
}
