import { SyntheticEvent, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Button } from 'shared/component/Button'
import { Input } from 'shared/component/Input'
import { classNames } from 'shared/lib/classNames'
import { DynamicModuleLoader } from 'shared/lib/component/DynamicModuleLoader/DynamicModuleLoader'
import { ReducerList } from 'shared/lib/component/DynamicModuleLoader/type/props.type'
import { useAppDispatch } from 'shared/lib/component/useAppDispatch'

import { getCommentCreatorData } from '../model/selector/getCommentCreatorData'
import { getCommentCreatorError } from '../model/selector/getCommentCreatorError'
import { addComment } from '../model/service/addComment'
import {
  commentCreatorActions,
  commentCreatorReducer,
} from '../model/slice/commentCreatorSlice'
import { CommentCreatorProps } from '../type/props.type'
import cls from './CommentCreator.module.scss'

const reducerList: ReducerList = {
  commentCreator: commentCreatorReducer,
}

export const CommentCreator = memo((props: CommentCreatorProps) => {
  const { className, userId, articleId } = props
  const { t } = useTranslation()
  const text = useSelector(getCommentCreatorData)
  const error = useSelector(getCommentCreatorError)
  const dispatch = useAppDispatch()

  const onCommentTextChange = useCallback(
    (value: string) => {
      dispatch(commentCreatorActions.setComment(value))
    },
    [dispatch]
  )

  const onSubmitComment = useCallback(
    (e: SyntheticEvent) => {
      e.preventDefault()
      dispatch(
        addComment({
          userId,
          articleId,
          text,
        })
      )
    },
    [userId, articleId, text, dispatch]
  )

  const clsCommentCreator = classNames(cls.commentCreator, [className], {})
  return (
    <DynamicModuleLoader reducerList={reducerList}>
      <div className={clsCommentCreator}>
        {error && <div>{t('error-in-comment-creator')}</div>}
        <form className={cls.inner} onSubmit={onSubmitComment}>
          <Input
            className={cls.input}
            placeholder={t('comment-text')}
            value={text}
            onChange={onCommentTextChange}
            name="comment"
          />
          <Button type="submit" className={cls.button}>
            {t('send-form')}
          </Button>
        </form>
      </div>
    </DynamicModuleLoader>
  )
})
