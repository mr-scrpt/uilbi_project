import { ArticleFeedViewEnum } from '../../type/view.enum'

export const ArticleLimitValue: Record<ArticleFeedViewEnum, number> = {
  [ArticleFeedViewEnum.TILE]: 9,
  [ArticleFeedViewEnum.ROW]: 4,
}
