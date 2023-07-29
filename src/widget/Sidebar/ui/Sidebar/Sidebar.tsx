import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames'
import { IconEnum } from 'shared/component/Icon'
import { LangSwitcher, LangSwitcherViewEnum } from 'widget/LangSwitcher'
import {
  LinkApp,
  LinkSizeEnum,
  LinkViewEnum,
  LinkModeEnum,
} from 'shared/component/LinkApp'
import { RoutePath } from 'shared/config/configRouter/configRouter'
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
        <div className={cls.boxNav}>
          <LinkApp
            to={RoutePath.main}
            view={LinkViewEnum.SECONDARY}
            size={LinkSizeEnum.XL}
            icon={IconEnum.MENU_HOME}
            mode={linkMode}
          >
            {t('menu-top-link-main')}
          </LinkApp>
          <LinkApp
            to={RoutePath.about}
            view={LinkViewEnum.SECONDARY}
            size={LinkSizeEnum.XL}
            icon={IconEnum.MENU_ABOUT}
            mode={linkMode}
          >
            {t('menu-top-link-about')}
          </LinkApp>
        </div>
        {/* <LightIcon onClick={handlerClick} /> */}

        <div className={clsFooter}>
          <ThemeSwitcher className={clsThemeSwitcher} />
          <LangSwitcher view={viewLangSwitcher} />
        </div>
      </div>
    </div>
  )
}
