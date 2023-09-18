import { ArticleViewEnum } from 'entity/Article/type/view.enum'
import { HTMLAttributes } from 'react'
import { FeedArticleView } from 'widget/FeedArticle/type/view.type'

export interface FeedViewProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  changeView: (view: ArticleViewEnum) => void
  view: FeedArticleView[]
}
