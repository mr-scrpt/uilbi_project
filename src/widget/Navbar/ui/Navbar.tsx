import { ModalNameEnum, ModalStatusEnum, modalAction } from 'entity/Modal'
import { LoginModal } from 'feature/AuthByUserName/component/LoginModal/ui/LoginModal'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { IconEnum } from 'shared/component/Icon'
import { LinkApp, LinkSizeEnum, LinkViewEnum } from 'shared/component/LinkApp'
import { classNames } from 'shared/lib/classNames'

import { NavbarProps } from '../type/props.type'
import cls from './Navbar.module.scss'

export function Navbar(props: NavbarProps) {
  const { className } = props

  const { t } = useTranslation('menu_main')

  const clsNavbar = classNames(cls.navbar, [className])

  const clsInner = classNames(cls.inner)

  const clsMenu = classNames(cls.menu)

  const dispatch = useDispatch()
  const openModal = () =>
    dispatch(
      modalAction.openModal({
        name: ModalNameEnum.LOGIN,
        state: ModalStatusEnum.OPEN,
      })
    )

  return (
    <div className={clsNavbar}>
      <LoginModal />
      <div className={clsInner}>
        <div className={clsMenu}>
          <LinkApp
            to="/"
            view={LinkViewEnum.SECONDARY}
            size={LinkSizeEnum.XL}
            icon={IconEnum.MENU_HOME}
            onClick={openModal}
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
