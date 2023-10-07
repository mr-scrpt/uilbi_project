import { memo } from 'react'
import { classNames } from 'shared/lib/classNames'

import { ArticleCreatePageProps } from '../type/props.type'
import cls from './ArticleCreatePage.module.scss'

export const ArticleCreatePage = memo((props: ArticleCreatePageProps) => {
  const { className } = props

  const clsArticleCreatePage = classNames(
    cls.articleCreatePage,
    [className],
    {}
  )
  return <div className={clsArticleCreatePage}>ARTICLE_CREATE_PAGE</div>
})
