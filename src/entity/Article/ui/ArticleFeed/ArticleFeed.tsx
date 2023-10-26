import { classNames } from '@/shared/lib/classNames'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { ArticleFeedProps, ArticleFeedViewEnum } from '../../type'
import cls from './ArticleFeed.module.scss'
import { ArticleFeedSkeleton } from './ArticleFeed.skeleton'

export const ArticleFeed = memo((props: ArticleFeedProps) => {
  const {
    className,
    articleList,
    isLoading,
    error,
    view = ArticleFeedViewEnum.TILE,
    renderFeed,
  } = props

  const clsFeed = classNames(cls.list, [className], {})

  const { t } = useTranslation()

  return (
    <div className={clsFeed}>
      <div className={cls.inner}>
        {articleList && articleList.map(renderFeed)}
        {error && <div>{error}</div>}

        {isLoading && <ArticleFeedSkeleton view={view} className={className} />}
        {!isLoading && !articleList?.length && (
          <span>{t('not-article-found')}</span>
        )}
      </div>
    </div>
  )
})
