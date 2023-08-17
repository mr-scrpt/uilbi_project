import axios from 'axios'
import { storageAuthData } from 'shared/lib/storage/LocalStorage'

export const $api = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    authorization: storageAuthData.getItem(),
  },
})