import { memo } from 'react'
import { Avatar } from '@/shared/component/Avatar'
import { LinkApp } from '@/shared/component/LinkApp'
import { RoutePath } from '@/shared/config/configRouter/configRouter'
import { classNames } from '@/shared/lib/classNames'

import { CommentProps } from '../../type/props.type'
import cls from './Comment.module.scss'
import { CommentSkeleton } from './Comment.skeleton'

export const Comment = memo((props: CommentProps) => {
  const { className, comment, isLoading } = props
  const { user } = comment

  const clsComment = classNames(cls.comment, [className], {})

  return (
    <>
      {isLoading && <CommentSkeleton />}
      {!isLoading && (
        <div className={clsComment}>
          <div className={cls.inner}>
            {user?.avatar && (
              <Avatar
                source={user.avatar}
                title={user.username}
                className={cls.avatar}
              />
            )}
            <LinkApp
              to={`${RoutePath.profile}${user.id}`}
              className={cls.author}
            >
              {user.username}
            </LinkApp>
            <div className={cls.text}>{comment.text}</div>
          </div>
        </div>
      )}
    </>
  )
})
