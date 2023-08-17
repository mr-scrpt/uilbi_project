import { NavigateOptions, To } from 'react-router-dom'

export type NavigatorType = (to: To, options?: NavigateOptions) => void
