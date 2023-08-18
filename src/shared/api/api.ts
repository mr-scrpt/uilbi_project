import axios from 'axios'
import { storageAuthData } from 'shared/lib/storage/LocalStorage'

export const $api = axios.create({
  baseURL: __API_URL__,
  headers: {
    authorization: storageAuthData.getItem(),
  },
})
