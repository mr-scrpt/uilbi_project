import { memo, useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, ButtonSizeEnum, ButtonViewEnum } from '@/shared/component/Button'
import { DropDown } from '@/shared/component/DropDown'
import { RoutePath } from '@/shared/config/configRouter/configRouter'
import { classNames } from '@/shared/lib/classNames'
import { RoleEnum } from '@/shared/type/role/role.enum'
import { ThemeSwitcher } from '@/widget/ThemeSwitcher'

import { UserMenuProps } from '../type/props.type'
import cls from './UserMenu.module.scss'

export const UserMenu = memo((props: UserMenuProps) => {
  const { className, user, logout } = props

  const clsUserMenu = classNames(cls.userMenu, [className], {})

  const { t } = useTranslation()

  const isAdminPanelShow = user.role.includes(RoleEnum.ADMIN)

  const list = useMemo(
    () => [
      ...(isAdminPanelShow
        ? [
            {
              id: 1,
              title: t('Админка'),
              href: RoutePath.admin,
            },
          ]
        : []),
      { id: 2, title: 'Profile', href: `${RoutePath.profile}${user.id}` },
      {
        id: 3,
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
      { id: 4, Component: <ThemeSwitcher /> },
    ],
    [logout, t, isAdminPanelShow, user]
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
