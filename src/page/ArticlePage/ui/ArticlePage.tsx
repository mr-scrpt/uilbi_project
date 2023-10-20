import { Article } from 'entity/Article'
import { ArticleRecomended } from 'entity/ArticleRecomended'
import { getUserAuthData } from 'entity/User'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames'
import { ArticleBar } from 'widget/ArticleBar'
import { CommentArticleList } from 'widget/CommentArticleList'

import { ArticlePageProps } from '../type/props.type'
import cls from './ArticlePage.module.scss'

export const ArticlePage = memo((props: ArticlePageProps) => {
  const { className } = props
  const { t } = useTranslation()
  const { id } = useParams<{ id: string }>()
  const user = useSelector(getUserAuthData)

  const clsArticlePage = classNames(cls.articlePage, [className], {})
  if (!id) {
    return <div className={clsArticlePage}>{t('page-not-found')}</div>
  }

  return (
    <div className={clsArticlePage}>
      <ArticleBar articleId={id} />
      <Article articleId={id} />

      <ArticleRecomended />
      <CommentArticleList slug={id} userId={user?.id} />
    </div>
  )
})
