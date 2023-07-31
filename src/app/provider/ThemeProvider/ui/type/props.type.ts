import { ReactNode } from 'react'

import { ThemeEnum } from '../../type'

export interface ThemeProviderProps {
  children: ReactNode
  initialTheme?: ThemeEnum
}
