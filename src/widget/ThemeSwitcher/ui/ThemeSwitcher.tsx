import { useTheme } from "app/provider/ThemeProvider"
import { FC } from "react"
import { classNames } from "shared/lib/classNames"
import { Button, ButtonSizeEnum } from "shared/ui/Button"
import { ThemeSwitcherProps } from "../type/props.type"
import { IconEnum } from 'shared/ui/Icon/type/icon.enum';
import cls from './ThemeSwitcher.module.scss'
import { ThemeEnum } from "app/provider/ThemeProvider/type"
import { IconPositionEnum } from "shared/ui/Button/type/iconPosition.enum"

export const ThemeSwitcher:FC<ThemeSwitcherProps> = (props) => {
  const { className } = props

  const { themeToggle, theme } = useTheme()

  const clsThemeSwitcher  = classNames(cls.themeSwitcher, [className])

  const clsInner = classNames(cls.inner)

  const clsButton = classNames(cls.button)

  const clsIcon = classNames(cls.icon)

  const icon = theme === ThemeEnum.DARK? IconEnum.THEME_DARK: IconEnum.THEME_LIGHT

  return (
    <div className={clsThemeSwitcher}>
      <div className={clsInner}>
        <Button
          onClick={themeToggle}
          className={clsButton}
          classIcon={clsIcon}
          size={ButtonSizeEnum.XL}
          icon={icon}
          iconPosition={IconPositionEnum.RIGHT}
        >
        </Button>
      </div>
    </div>
  )

}
