import { rtkApi } from 'shared/api/rtkApi'

const recomendedApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchArticleRecomended: builder.query({
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
