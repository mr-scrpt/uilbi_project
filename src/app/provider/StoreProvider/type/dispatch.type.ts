import { createStore } from '../config/configStore'

export type AppDispatchType = ReturnType<typeof createStore>['dispatch']
