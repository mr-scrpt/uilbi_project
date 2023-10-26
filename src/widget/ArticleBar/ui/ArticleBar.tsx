import { GoEditArticleButton } from '@/feature/GoEditArticleButton'
import { GoFeedButton } from '@/feature/GoFeedButton'
import { memo } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from '@/shared/lib/classNames'

import { canEditArticle } from '../model/selector/canEditArticle'
import { ArticleBarProps } from '../type/props.type'
import cls from './ArticleBar.module.scss'

export const ArticleBar = memo((props: ArticleBarProps) => {
  const { className, articleId } = props

  const clsArticleBar = classNames(cls.articleBar, [className], {})

  const canEdit = useSelector(canEditArticle)
  return (
    <div className={clsArticleBar}>
      <div className={cls.inner}>
        <GoFeedButton text="go-article-feed" />
        {canEdit && (
          <GoEditArticleButton slug={articleId} text="go-article-edit" />
        )}
      </div>
    </div>
  )
})
