import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames'
import {
  Button,
  ButtonIconPositionEnum,
  ButtonShapeEnum,
  ButtonSizeEnum,
  ButtonViewEnum,
} from 'shared/component/Button'
import { LangSwitcher } from 'widget/LangSwitcher'

import { ThemeSwitcher } from 'widget/ThemeSwitcher'
import cls from './Sidebar.module.scss'
import { SidebarProps } from './type/props.type'
import { IconEnum } from 'shared/component/Icon'

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

  console.log('buttonIcon', buttonIcon)

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
        <div className={cls.boxNav}>
          <div>
            <Button
              className={clsButton}
              view={ButtonViewEnum.PRIMARY}
              shape={ButtonShapeEnum.MAIN}
              onClick={toggleHandler}
              icon={buttonIcon}
            >
              Text button
            </Button>
            <Button
              className={clsButton}
              view={ButtonViewEnum.SECONDARY}
              shape={ButtonShapeEnum.MAIN}
              onClick={toggleHandler}
              icon={buttonIcon}
              iconPosition={ButtonIconPositionEnum.RIGHT}
            >
              Text button
            </Button>
          </div>
        </div>
        {/* <LightIcon onClick={handlerClick} /> */}

        <div className={cls.boxFooter}>
          <ThemeSwitcher className={clsThemeSwitcher} />
          {/* <LangSwitcher /> */}
        </div>
      </div>
    </div>
  )
}
