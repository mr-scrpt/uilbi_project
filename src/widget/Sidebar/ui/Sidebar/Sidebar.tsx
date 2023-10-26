import { memo } from 'react'
import {
  Button,
  ButtonShapeEnum,
  ButtonViewEnum,
} from '@/shared/component/Button'
import { IconEnum } from '@/shared/component/Icon'
import { LinkModeEnum } from '@/shared/component/LinkApp'
import { classNames } from '@/shared/lib/classNames'
import { LangSwitcher, LangSwitcherViewEnum } from '@/widget/LangSwitcher'
import { ThemeSwitcher } from '@/widget/ThemeSwitcher'

import { SidebarProps } from '../../type/props.type'
import { SidebarMenu } from '../SidebarMenu/SidebarMenu'
import cls from './Sidebar.module.scss'

export const Sidebar = memo((props: SidebarProps) => {
  const { className, collapsed, toggleHandler } = props

  const clsSidebar = classNames(cls.sidebar, [className])
  const clsButton = classNames(cls.button)
  const clsFooter = classNames(cls.footer, [], {
    [cls.footer_column]: collapsed,
    [cls.footer_row]: !collapsed,
  })

  const clsThemeSwitcher = classNames(cls.themeSwitcher)

  const clsIcon = classNames(cls.icon, [], {
    [cls.icon_collapsed]: collapsed,
    [cls.icon_uncollapsed]: !collapsed,
  })

  const viewLangSwitcher = collapsed
    ? LangSwitcherViewEnum.SHORT
    : LangSwitcherViewEnum.FULL

  const linkMode = collapsed ? LinkModeEnum.ICON : LinkModeEnum.DEFAULT

  return (
    <div className={clsSidebar}>
      <div className={cls.inner}>
        <div className={cls.control}>
          <Button
            className={clsButton}
            classIcon={clsIcon}
            view={ButtonViewEnum.TRANSPARENT}
            shape={ButtonShapeEnum.FLAT}
            onClick={toggleHandler}
            icon={IconEnum.BURGER}
          />
        </div>

        <SidebarMenu mode={linkMode} className={cls.boxNav} />

        {/* <LightIcon onClick={handlerClick} /> */}

        <div className={clsFooter}>
          <ThemeSwitcher className={clsThemeSwitcher} />
          <LangSwitcher view={viewLangSwitcher} />
        </div>
      </div>
    </div>
  )
})
