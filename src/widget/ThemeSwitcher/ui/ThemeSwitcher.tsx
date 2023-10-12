import { useTheme } from 'app/provider/ThemeProvider'
import { ThemeEnum } from 'app/provider/ThemeProvider/type'
import { memo } from 'react'
import {
  Button,
  ButtonShapeEnum,
  ButtonSizeEnum,
  ButtonViewEnum,
} from 'shared/component/Button'
import { IconEnum } from 'shared/component/Icon/type/icon.enum'
import { classNames } from 'shared/lib/classNames'

import { ThemeSwitcherProps } from '../type/props.type'
import cls from './ThemeSwitcher.module.scss'

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
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
})
