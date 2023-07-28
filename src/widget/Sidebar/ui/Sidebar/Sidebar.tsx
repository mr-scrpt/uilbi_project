import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames'
import { IconEnum } from 'shared/component/Icon'
import {
  Button,
  ButtonShapeEnum,
  ButtonViewEnum,
} from 'shared/component/Button'

import { ThemeSwitcher } from 'widget/ThemeSwitcher'
import cls from './Sidebar.module.scss'
import { SidebarProps } from './type/props.type'

export const Sidebar: FC<SidebarProps> = (props) => {
  const { className, collapsed, toggleHandler } = props

  const { t } = useTranslation()

  const clsSidebar = classNames(cls.sidebar, [className])
  const clsButton = classNames(cls.button)

  // const clsIcon = classNames('', [], {
  //   [cls.icon_collapsed]: !collapsed,
  //   [cls.icon_uncollapsed]: collapsed,
  // })

  const clsThemeSwitcher = classNames(cls.themeSwitcher)
  const buttonIcon = collapsed
    ? IconEnum.BURGER_COLLAPSED
    : IconEnum.BURGER_EXPANDED

  return (
    <div className={clsSidebar}>
      <div className={cls.inner}>
        <div className={cls.control}>
          <Button
            className={clsButton}
            view={ButtonViewEnum.TRANSPARENT}
            shape={ButtonShapeEnum.FLAT}
            onClick={toggleHandler}
            icon={buttonIcon}
          />
        </div>
        <div className={cls.boxNav}></div>
        {/* <LightIcon onClick={handlerClick} /> */}

        <div className={cls.boxFooter}>
          <ThemeSwitcher className={clsThemeSwitcher} />
          {/* <LangSwitcher /> */}
        </div>
      </div>
    </div>
  )
}
