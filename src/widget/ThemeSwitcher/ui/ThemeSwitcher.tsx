import { useTheme } from "app/provider/ThemeProvider"
import { FC } from "react"
import { classNames } from "shared/lib/classNames"
import { Button, ButtonSizeEnum } from "shared/ui/Button"
import { ThemeSwitcherProps } from "../type/props.type"
import { Icon } from 'shared/ui/Icon/Icon';
import { IconEnum } from 'shared/ui/Icon/type/icon.enum';
import cls from './ThemeSwitcher.module.scss'
import { ThemeEnum } from "app/provider/ThemeProvider/type"
import { IconPositionEnum } from "shared/ui/Button/type/iconPosition.enum"

export const ThemeSwitcher:FC<ThemeSwitcherProps> = (props) => {
  const { themeToggle, theme } = useTheme()

  const classMain = classNames(cls.main)

  const classInner = classNames(cls.inner)

  const classButton = classNames(cls.button)

  // const classIcon = classNames(cls.icon)

  const icon = theme === ThemeEnum.DARK? IconEnum.THEME_DARK: IconEnum.THEME_LIGHT

  return (
    <div className={classMain}>
      <div className={classInner}>
        <Button
          onClick={themeToggle}
          className={classButton}
          size={ButtonSizeEnum.XL}
          icon={icon}
          iconPosition={IconPositionEnum.RIGHT}
        >
        </Button>
      </div>
    </div>
  )

}
