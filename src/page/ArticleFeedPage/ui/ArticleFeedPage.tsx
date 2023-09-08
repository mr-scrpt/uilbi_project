import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames'

import { ArticleFeedPageProps } from '../type/props.type'
import cls from './ArticleFeedPage.module.scss'

export const ArticleFeedPage = memo((props: ArticleFeedPageProps) => {
  const { className } = props
  const { t } = useTranslation()

  const clsArticleFeedPage = classNames(cls.articleFeedPage, [className], {})
  return <div className={clsArticleFeedPage}></div>
})
