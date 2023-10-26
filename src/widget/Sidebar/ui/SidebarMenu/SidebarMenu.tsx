import { getUserAuthData } from '@/entity/User'
import { FC, memo } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from '@/shared/lib/classNames'

import { SidebarListData } from '../../model/sidebarList.data'
import { SidebarMenuProps } from '../../type/props.type'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import cls from './SidebarMenu.module.scss'

export const SidebarMenu: FC<SidebarMenuProps> = memo(
  (props: SidebarMenuProps) => {
    const { className, mode } = props
    const isAuth = useSelector(getUserAuthData)

    const clsSidebarMenu = classNames(cls.sidebarMenu, [className], {})
    const SidebarList = SidebarListData(mode, !!isAuth, isAuth?.id)

    return (
      <div className={clsSidebarMenu}>
        <div className={cls.sidebarMenu_inner}>
          {SidebarList.map((item) => (
            <SidebarItem
              to={item.to}
              icon={item.icon}
              text={item.text}
              mode={item.mode}
              key={item.to}
            />
          ))}
        </div>
      </div>
    )
  }
)
