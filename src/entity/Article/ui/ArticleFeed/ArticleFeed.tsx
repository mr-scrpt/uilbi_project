import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames'

import { ArticleFeedProps, ArticleFeedViewEnum } from '../../type'
import cls from './ArticleFeed.module.scss'
import { ArticleFeedSkeleton } from './ArticleFeed.skeleton'

export const ArticleFeed = memo((props: ArticleFeedProps) => {
  const {
    className,
    articleList,
    isLoading,
    view = ArticleFeedViewEnum.TILE,
    renderFeed,
  } = props

  const clsFeed = classNames(cls.list, [className], {})

  const { t } = useTranslation()

  return (
    <div className={clsFeed}>
      <div className={cls.inner}>
        {articleList && articleList.map(renderFeed)}

        {isLoading && <ArticleFeedSkeleton view={view} className={className} />}
        {!isLoading && !articleList?.length && (
          <span>{t('not-article-found')}</span>
        )}
      </div>
    </div>
  )
})
