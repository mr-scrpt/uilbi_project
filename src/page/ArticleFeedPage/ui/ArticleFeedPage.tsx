import { memo } from 'react'
import { classNames } from 'shared/lib/classNames'
import { FeedArticle } from 'widget/FeedArticle'

import { ArticleFeedPageProps } from '../type/props.type'
import cls from './ArticleFeedPage.module.scss'

export const ArticleFeedPage = memo((props: ArticleFeedPageProps) => {
  const { className } = props

  const clsArticleFeedPage = classNames(cls.articleFeedPage, [className], {})
  return (
    <div className={clsArticleFeedPage}>
      <div className={cls.inner}>
        <FeedArticle />
      </div>
    </div>
  )
})
