import { Article } from 'entity/Article'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames'
import { CommentArticleCreator } from 'widget/CommentArticleCreator'
import { CommentArticleList } from 'widget/CommentArticleList'

import { ArticlePageProps } from '../type/props.type'
import cls from './ArticlePage.module.scss'

export const ArticlePage = memo((props: ArticlePageProps) => {
  const { className } = props
  const { t } = useTranslation()
  const { id } = useParams<{ id: string }>()

  const clsArticlePage = classNames(cls.articlePage, [className], {})
  if (!id) {
    return <div className={clsArticlePage}>{t('page-not-found')}</div>
  }
  return (
    <div className={clsArticlePage}>
      <Article articleId={id} />
      <CommentArticleCreator />
      <CommentArticleList slug={id} />
    </div>
  )
})
