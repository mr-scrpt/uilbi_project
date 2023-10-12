import { ModalNameEnum, modalAction } from 'entity/Modal'
import { getUserAuthData, userAction } from 'entity/User'
import { UserMenu } from 'feature/UserMenu'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Button, ButtonSizeEnum, ButtonViewEnum } from 'shared/component/Button'
import { DropDown } from 'shared/component/DropDown'
import { IconEnum } from 'shared/component/Icon'
import { LinkApp } from 'shared/component/LinkApp'
import { RoutePath } from 'shared/config/configRouter/configRouter'
import { classNames } from 'shared/lib/classNames'
import { useAppDispatch } from 'shared/lib/component/useAppDispatch'
import { ThemeSwitcher } from 'widget/ThemeSwitcher'

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

  const openModal = () => {
    dispatch(
      modalAction.openModal({
        name: ModalNameEnum.LOGIN,
      })
    )
  }

  const logout = () => {
    dispatch(userAction.logout())
  }

  return (
    <div className={clsNavbar}>
      <div className={clsInner}>
        <div className={cls.slogan}>{t('Best-site')}</div>
        <div className={cls.create}>
          {authData && (
            <LinkApp to={RoutePath.article_create}>{t('to-create')}</LinkApp>
          )}
        </div>
        <div className={clsMenu}>
          {authData && (
            <>
              <UserMenu user={authData} logout={logout} />
              {/* <DropDownTest list={list}> */}
              {/*   <Button>text</Button> */}
              {/* </DropDownTest> */}
            </>
          )}
          {!authData && (
            <>
              <Button
                icon={IconEnum.MENU_HOME}
                size={ButtonSizeEnum.S}
                view={ButtonViewEnum.SECONDARY}
              >
                {t('menu-main-link-reg')}
              </Button>

              <Button
                onClick={openModal}
                icon={IconEnum.MENU_HOME}
                size={ButtonSizeEnum.S}
                view={ButtonViewEnum.SECONDARY}
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
