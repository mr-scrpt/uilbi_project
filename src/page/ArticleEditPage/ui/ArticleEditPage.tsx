import { memo } from 'react'
import { classNames } from '@/shared/lib/classNames'

import { ArticleEditPageProps } from '../type/props.type'
import cls from './ArticleEditPage.module.scss'

export const ArticleEditPage = memo((props: ArticleEditPageProps) => {
  const { className } = props

  const clsArticleEditPage = classNames(cls.articleEditPage, [className], {})
  return <div className={clsArticleEditPage}>ARTICLE_EDIT_PAGE</div>
})
