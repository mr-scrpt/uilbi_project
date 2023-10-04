import { PartialRecord } from 'shared/type/partionalRecord'

import { getQueryParams } from './getQueryParams'

export function controlQueryParams(params: PartialRecord<string, string>) {
  window.history.pushState(null, '', getQueryParams(params))
}
