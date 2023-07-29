import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames'
import { IconEnum } from 'shared/component/Icon'
import { LinkApp, LinkSizeEnum, LinkViewEnum } from 'shared/component/LinkApp'
import { NavbarProps } from '../type/props.type'
import cls from './Navbar.module.scss'

export function Navbar(props: NavbarProps) {
  const { className } = props

  const { t } = useTranslation()

  const clsNavbar = classNames(cls.navbar, [className])

  const clsInner = classNames(cls.inner)

  const clsMenu = classNames(cls.menu)

  return (
    <div className={clsNavbar}>
      <div className={clsInner}>
        <div className={clsMenu}>
          <LinkApp
            to="/"
            view={LinkViewEnum.SECONDARY}
            size={LinkSizeEnum.XL}
            icon={IconEnum.MENU_HOME}
          >
            {t('menu-top-link-main')}
          </LinkApp>
          <LinkApp
            to="/about"
            view={LinkViewEnum.SECONDARY}
            size={LinkSizeEnum.XL}
            icon={IconEnum.MENU_ABOUT}
          >
            {t('menu-top-link-about')}
          </LinkApp>
        </div>
      </div>
    </div>
  )
}
