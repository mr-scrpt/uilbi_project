import { useTheme } from 'app/provider/ThemeProvider'
import { FC } from 'react'
import { classNames } from 'shared/lib/classNames'
import {
  Button,
  ButtonShapeEnum,
  ButtonSizeEnum,
  ButtonViewEnum,
} from 'shared/component/Button'
import { IconEnum } from 'shared/component/Icon/type/icon.enum'
import { ThemeEnum } from 'app/provider/ThemeProvider/type'
import cls from './ThemeSwitcher.module.scss'
import { ThemeSwitcherProps } from '../type/props.type'

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
  const { className } = props

  const { themeToggle, theme } = useTheme()

  const clsThemeSwitcher = classNames(cls.themeSwitcher, [className])

  const clsInner = classNames(cls.inner)

  const clsButton = classNames(cls.button)

  const clsIcon = classNames(cls.icon, [], {
    [cls.icon_light]: theme === ThemeEnum.LIGHT,
    [cls.icon_dark]: theme === ThemeEnum.DARK,
  })

  // const icon =
  //   theme === ThemeEnum.DARK ? IconEnum.THEME_DARK : IconEnum.THEME_LIGHT

  return (
    <div className={clsThemeSwitcher}>
      <div className={clsInner}>
        <Button
          onClick={themeToggle}
          className={clsButton}
          classIcon={clsIcon}
          shape={ButtonShapeEnum.NEXT}
          view={ButtonViewEnum.TRANSPARENT}
          size={ButtonSizeEnum.L}
          icon={IconEnum.THEME}
        />
      </div>
    </div>
  )
}
