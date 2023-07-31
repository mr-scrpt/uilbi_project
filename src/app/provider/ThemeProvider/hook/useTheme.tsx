import { useContext } from 'react'

import { LOCAL_STORAGE_KEY, ThemeContext } from '../lib/ThemeContext'
import { ThemeEnum, UseThemeInterface } from '../type'

export const useTheme = (): UseThemeInterface => {
  const { theme, setTheme } = useContext(ThemeContext)

  const themeToggle = () => {
    const themeNew = theme === ThemeEnum.DARK ? ThemeEnum.LIGHT : ThemeEnum.DARK
    setTheme(themeNew)
    // localStorage.setItem(LOCAL_STORAGE_KEY, themeNew)
  }

  return { theme, themeToggle }
}
