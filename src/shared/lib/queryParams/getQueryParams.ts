import { PartialRecord } from 'shared/type/partionalRecord'

export const getQueryParams = (params: PartialRecord<string, string>) => {
  const searchParams = new URLSearchParams(window.location.search)
  Object.entries(params).forEach(([name, value]) => {
    console.log('name, value', name, value)
    if (value !== undefined) {
      searchParams.set(name, value)
    }
    if (value === '') {
      searchParams.delete(name)
    }
  })
  return `?${searchParams.toString()}`
}
