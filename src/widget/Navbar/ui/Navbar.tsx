import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames'
import { IconEnum } from 'shared/component/Icon'
import { LinkApp, LinkSizeEnum, LinkViewEnum } from 'shared/component/LinkApp'
import { NavbarProps } from '../type/props.type'
import cls from './Navbar.module.scss'

export function Navbar(props: NavbarProps) {
  const { className, onOpenModal } = props

  const { t } = useTranslation('menu_main')

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
            onClick={onOpenModal}
          >
            {t('menu-main-link-reg')}
          </LinkApp>
          <LinkApp
            to="/about"
            view={LinkViewEnum.SECONDARY}
            size={LinkSizeEnum.XL}
            icon={IconEnum.MENU_ABOUT}
          >
            {t('menu-main-link-login')}
          </LinkApp>
        </div>
      </div>
    </div>
  )
}
