import { ModalNameEnum, ModalStatusEnum, modalAction } from 'entity/Modal'
import { getUserAuthData, userAction } from 'entity/User'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { IconEnum } from 'shared/component/Icon'
import { LinkApp, LinkSizeEnum, LinkViewEnum } from 'shared/component/LinkApp'
import { classNames } from 'shared/lib/classNames'
import { useAppDispatch } from 'shared/lib/component/useAppDispatch'

import { NavbarProps } from '../type/props.type'
import cls from './Navbar.module.scss'

export function Navbar(props: NavbarProps) {
  const { className } = props

  const authData = useSelector(getUserAuthData)

  const { t } = useTranslation('menu_main')

  const clsNavbar = classNames(cls.navbar, [className])

  const clsInner = classNames(cls.inner)

  const clsMenu = classNames(cls.menu)

  const dispatch = useAppDispatch()
  const openModal = () =>
    dispatch(
      modalAction.openModal({
        name: ModalNameEnum.LOGIN,
      })
    )

  const logout = () => {
    dispatch(userAction.logout())
  }

  return (
    <div className={clsNavbar}>
      <div className={clsInner}>
        <div className={clsMenu}>
          {authData && (
            <LinkApp
              to="/"
              view={LinkViewEnum.SECONDARY}
              size={LinkSizeEnum.XL}
              icon={IconEnum.MENU_HOME}
              onClick={logout}
            >
              {t('menu-main-link-logout')}
            </LinkApp>
          )}
          {!authData && (
            <>
              <LinkApp
                to=""
                view={LinkViewEnum.SECONDARY}
                size={LinkSizeEnum.XL}
                icon={IconEnum.MENU_HOME}
              >
                {t('menu-main-link-reg')}
              </LinkApp>
              <LinkApp
                to=""
                view={LinkViewEnum.SECONDARY}
                size={LinkSizeEnum.XL}
                icon={IconEnum.MENU_ABOUT}
                onClick={openModal}
              >
                {t('menu-main-link-login')}
              </LinkApp>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
