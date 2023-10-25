import { INotification } from 'entity/Notification'
import { rtkApi } from 'shared/api/rtkApi'

const notificationApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getNotificationList: build.query<INotification[], null>({
      query: () => ({
        url: '/notifications',
      }),
    }),
  }),
})

export const useNotification = notificationApi.useGetNotificationListQuery
