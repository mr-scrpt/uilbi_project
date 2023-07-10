export enum ThemeEnum {
    LIGHT = 'theme_light',
    DARK = 'theme_dark',
}

export interface ThemeContextInterface {
    theme?: ThemeEnum
    setTheme?: (theme: ThemeEnum) => void
}

export interface UseThemeInterface {
  theme: ThemeEnum,
  themeToggle: ()=> void

}
