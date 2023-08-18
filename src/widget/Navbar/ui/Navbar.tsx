import { ModalNameEnum, ModalStatusEnum, modalAction } from 'entity/Modal'
import { getUserAuthData, userAction } from 'entity/User'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Button, ButtonSizeEnum, ButtonViewEnum } from 'shared/component/Button'
import { IconEnum } from 'shared/component/Icon'
import { LinkApp, LinkSizeEnum, LinkViewEnum } from 'shared/component/LinkApp'
import { classNames } from 'shared/lib/classNames'
import { useAppDispatch } from 'shared/lib/component/useAppDispatch'

import { NavbarProps } from '../type/props.type'
import cls from './Navbar.module.scss'

export const Navbar = memo((props: NavbarProps) => {
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
            <Button
              onClick={logout}
              view={ButtonViewEnum.SECONDARY}
              size={ButtonSizeEnum.S}
            >
              {t('menu-main-link-logout')}
            </Button>
          )}
          {!authData && (
            <>
              <Button
                view={ButtonViewEnum.SECONDARY}
                size={ButtonSizeEnum.S}
                icon={IconEnum.MENU_HOME}
              >
                {t('menu-main-link-reg')}
              </Button>

              <Button
                view={ButtonViewEnum.SECONDARY}
                size={ButtonSizeEnum.S}
                icon={IconEnum.MENU_HOME}
                onClick={openModal}
              >
                {t('menu-main-link-login')}
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  )
})
