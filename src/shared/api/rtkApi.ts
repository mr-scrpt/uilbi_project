import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { storageAuthData } from 'shared/lib/storage/LocalStorage'

export const rtkApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: __API_URL__,
    prepareHeaders: (headers) => {
      const token = storageAuthData.getItem()
      if (token) {
        headers.set('Authorization', token)
      }
      return headers
    },
  }),
  endpoints: () => ({}),
})
