import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames'

import { CommentListProps } from '../../type/props.type'
import { Comment } from '../Comment/Comment'
import cls from './CommentList.module.scss'

export const CommentList = memo((props: CommentListProps) => {
  const { className, commentList, isLoading } = props
  const { t } = useTranslation()

  const clsCommentList = classNames(cls.commentList, [className], {})
  return (
    <div className={clsCommentList}>
      <div className={cls.inner}>
        <div className={cls.title}>{t('comment-title')}</div>
        <div className={cls.list}>
          {!commentList?.length && <div>{t('comment-not-exist')}</div>}
          {commentList?.map((comment) => (
            <Comment
              className={cls.item}
              comment={comment}
              key={comment.id}
              isLoading={isLoading}
            />
          ))}
        </div>
      </div>
    </div>
  )
})
