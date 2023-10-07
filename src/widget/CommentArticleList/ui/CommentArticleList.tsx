import { CommentList } from 'entity/Comment'
import { memo, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Title, TitleSizeEnum } from 'shared/component/Title'
import { classNames } from 'shared/lib/classNames'
import { DynamicModuleLoader } from 'shared/lib/component/DynamicModuleLoader/DynamicModuleLoader'
import { ReducerList } from 'shared/lib/component/DynamicModuleLoader/type/props.type'
import { useAppDispatch } from 'shared/lib/component/useAppDispatch'
import { CommentArticleCreator } from 'widget/CommentArticleCreator'

import { getCommentsArticleList } from '../model/selector/getCommentArticleListData'
import { getCommentArticleListError } from '../model/selector/getCommentArticleListError'
import { getCommentArticleListIsLoading } from '../model/selector/getCommentArticleListIsLoading'
import { fetchCommentArticleListById } from '../model/service/fetchCommentArticleList'
import { commentArticleListReducer } from '../model/slice/commentArticleList.slice'
import { CommentArticleListProps } from '../type/props.type'
import cls from './CommentArticleList.module.scss'

const reducerList: ReducerList = {
  commentAticleList: commentArticleListReducer,
}

export const CommentArticleList = memo((props: CommentArticleListProps) => {
  const { className, slug } = props
  const { t } = useTranslation()

  const commentList = useSelector(getCommentsArticleList.selectAll)
  const isLoading = useSelector(getCommentArticleListIsLoading)
  const error = useSelector(getCommentArticleListError)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchCommentArticleListById(slug))
  }, [dispatch, slug])
  const clsCommentArticleList = classNames(
    cls.commentArticleList,
    [className],
    {}
  )
  return (
    <DynamicModuleLoader reducerList={reducerList} removeAfterUnmount>
      <div className={clsCommentArticleList}>
        {error && <div>{t('error')}</div>}
        <Title size={TitleSizeEnum.M}>{t('comment-title')}</Title>
        <CommentList commentList={commentList} isLoading={isLoading} />
        <CommentArticleCreator />
      </div>
    </DynamicModuleLoader>
  )
})
