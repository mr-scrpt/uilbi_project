import { FC, useEffect, useMemo, useState } from 'react'

import { LOCAL_STORAGE_KEY, ThemeContext } from '../lib/ThemeContext'
import { ThemeEnum } from '../type'
import { ThemeProviderProps } from './type/props.type'

const themeDefault = localStorage.getItem(LOCAL_STORAGE_KEY) as ThemeEnum

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const { children, initialTheme } = props
  const [theme, setTheme] = useState<ThemeEnum>(themeDefault || initialTheme)

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, theme)
  }, [theme])

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  )

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}
