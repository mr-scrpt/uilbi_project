import { useContext } from 'react'

import { ThemeContext } from '../lib/ThemeContext'
import { ThemeEnum, UseThemeInterface } from '../type'

export const useTheme = (): UseThemeInterface => {
  const { theme, setTheme } = useContext(ThemeContext)

  const themeToggle = () => {
    const themeNew = theme === ThemeEnum.DARK ? ThemeEnum.LIGHT : ThemeEnum.DARK
    setTheme?.(themeNew)
  }

  return { theme: theme || ThemeEnum.LIGHT, themeToggle }
}
