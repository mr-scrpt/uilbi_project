import { getArticleData } from 'entity/Article'
import { getUserAuthData } from 'entity/User'
import { CommentCreator } from 'feature/CommentCreator'
import { memo } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames'

import { CommentArticleCreatorProps } from '../type/props.type'
import cls from './CommentArticleCreator.module.scss'

export const CommentArticleCreator = memo(
  (props: CommentArticleCreatorProps) => {
    const { className } = props

    const clsCommentArticleCreator = classNames(
      cls.commentArticleCreator,
      [className],
      {}
    )

    const user = useSelector(getUserAuthData)
    const article = useSelector(getArticleData)

    if (!user || !article) {
      return null
    }
    return (
      <div className={clsCommentArticleCreator}>
        <CommentCreator articleId={article.id} userId={user.id} />
      </div>
    )
  }
)
