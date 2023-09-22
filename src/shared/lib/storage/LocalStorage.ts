import { StoregeFabric } from './Storage'
import { StorageNameEnum } from './storageName.enum'

export const storage = (key: string) => new StoregeFabric(localStorage, key)

export const storageAuthData = storage(StorageNameEnum.AUTH_DATA)
export const storageFeedView = storage(StorageNameEnum.FEED_VIEW)
export const storageFeedLimit = storage(StorageNameEnum.FEED_LIMIT)
