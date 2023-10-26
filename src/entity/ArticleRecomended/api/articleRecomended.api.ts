import { IArticle } from '@/entity/Article/type'
import { rtkApi } from '@/shared/api/rtkApi'

const recomendedApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchArticleRecomended: builder.query<IArticle[], number>({
      query: (limit) => ({
        url: '/articles',
        params: {
          _limit: limit,
        },
      }),
    }),
  }),
})

export const useArticleRecomended = recomendedApi.useFetchArticleRecomendedQuery
