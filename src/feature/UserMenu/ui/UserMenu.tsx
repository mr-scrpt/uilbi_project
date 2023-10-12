import { memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, ButtonSizeEnum, ButtonViewEnum } from 'shared/component/Button'
import { DropDown } from 'shared/component/DropDown'
import { RoutePath } from 'shared/config/configRouter/configRouter'
import { classNames } from 'shared/lib/classNames'
import { ThemeSwitcher } from 'widget/ThemeSwitcher'

import { UserMenuProps } from '../type/props.type'
import cls from './UserMenu.module.scss'

export const UserMenu = memo((props: UserMenuProps) => {
  const { className, user, logout } = props

  const clsUserMenu = classNames(cls.userMenu, [className], {})

  const { t } = useTranslation()

  const list = useMemo(
    () => [
      { id: 1, title: 'Profile', href: `${RoutePath.profile}${user.id}` },
      {
        id: 2,
        Component: (
          <Button
            onClick={logout}
            view={ButtonViewEnum.SECONDARY}
            size={ButtonSizeEnum.S}
          >
            {t('menu-main-link-logout')}
          </Button>
        ),
      },
      { id: 3, Component: <ThemeSwitcher /> },
    ],
    [logout, t, user]
  )
  return (
    <div className={clsUserMenu}>
      <DropDown list={list}>
        <Button size={ButtonSizeEnum.S} img={user.avatar} classImg={cls.avatar}>
          {t('profile')}
        </Button>
      </DropDown>
    </div>
  )
})
