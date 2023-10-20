import { CommentCreator } from 'feature/CommentCreator'
import { memo } from 'react'
import { classNames } from 'shared/lib/classNames'

import { CommentArticleCreatorProps } from '../type/props.type'
import cls from './CommentArticleCreator.module.scss'

export const CommentArticleCreator = memo(
  (props: CommentArticleCreatorProps) => {
    const { className, slug, userId } = props

    const clsCommentArticleCreator = classNames(
      cls.commentArticleCreator,
      [className],
      {}
    )

    return (
      <div className={clsCommentArticleCreator}>
        <CommentCreator articleId={slug} userId={userId} />
      </div>
    )
  }
)
