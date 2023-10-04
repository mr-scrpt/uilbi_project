import { StorageCustomType } from './type'

export class StoregeFabric implements StorageCustomType {
  private storage: Storage

  private key: string

  constructor(storage: Storage, key: string) {
    this.storage = storage
    this.key = key
  }

  setItem(value: any): void {
    this.storage.setItem(this.key, JSON.stringify(value))
  }

  getItem(): any {
    const item = this.storage.getItem(this.key)
    return item ? JSON.parse(item) : null
  }

  removeItem(): void {
    this.storage.removeItem(this.key)
  }
}
