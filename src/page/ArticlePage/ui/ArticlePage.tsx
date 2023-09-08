import { Article } from 'entity/Article'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames'

import { ArticlePageProps } from '../type/props.type'
import cls from './ArticlePage.module.scss'

export const ArticlePage = memo((props: ArticlePageProps) => {
  const { className } = props
  const { t } = useTranslation()
  const { id } = useParams<{ id: string }>()

  const clsArticlePage = classNames(cls.articlePage, [className], {})
  if (!id) {
    return <div className={clsArticlePage}>Not found article</div>
  }
  return (
    <div className={clsArticlePage}>
      <Article articleId={id} />
    </div>
  )
})
