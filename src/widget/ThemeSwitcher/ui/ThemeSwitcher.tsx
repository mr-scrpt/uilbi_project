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
  const { themeToggle, theme } = useTheme()

  const clsMain = classNames(cls.main)

  const clsInner = classNames(cls.inner)

  const clsButton = classNames(cls.button)

  const clsIcon = classNames(cls.icon)

console.log(clsIcon)
  const icon = theme === ThemeEnum.DARK? IconEnum.THEME_DARK: IconEnum.THEME_LIGHT

  return (
    <div className={clsMain}>
      <div className={clsInner}>
        <Button
          onClick={themeToggle}
          classButton={clsButton}
          classIcon={clsIcon}
          size={ButtonSizeEnum.XL}
          icon={icon}
          iconPosition={IconPositionEnum.RIGHT}
        >
        text
        </Button>
      </div>
    </div>
  )

}
