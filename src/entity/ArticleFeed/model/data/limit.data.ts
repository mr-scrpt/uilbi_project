import { ArticleViewEnum } from '../../type/view.enum'

export const ArticleLimitValue: Record<ArticleViewEnum, number> = {
  [ArticleViewEnum.TILE]: 9,
  [ArticleViewEnum.ROW]: 4,
}
