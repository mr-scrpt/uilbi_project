import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames'
import { IconEnum } from 'shared/component/Icon'
import { LangSwitcher, LangSwitcherViewEnum } from 'widget/LangSwitcher'
import { LinkApp, LinkSizeEnum, LinkViewEnum } from 'shared/component/LinkApp'
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
  const buttonIcon = collapsed
    ? IconEnum.BURGER_COLLAPSED
    : IconEnum.BURGER_EXPANDED

  const viewLangSwitcher = collapsed
    ? LangSwitcherViewEnum.SHORT
    : LangSwitcherViewEnum.FULL

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
          <LinkApp
            to={RoutePath.main}
            view={LinkViewEnum.SECONDARY}
            size={LinkSizeEnum.XL}
          >
            {t('menu-top-link-main')}
          </LinkApp>
          <LinkApp
            to={RoutePath.about}
            view={LinkViewEnum.SECONDARY}
            size={LinkSizeEnum.XL}
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
