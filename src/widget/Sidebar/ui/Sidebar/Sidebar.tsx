import { FC } from "react"
import { classNames } from "shared/lib/classNames"
import { Button } from "shared/ui/Button"

import { ThemeSwitcher } from 'widget/ThemeSwitcher';
import cls from './Sidebar.module.scss'
import { SidebarProps } from "./type/props.type"

export const Sidebar:FC<SidebarProps> = (props) => {
  const {className, toggleHandler} = props

  const clsSidebar = classNames(cls.sidebar, [className])

  const clsThemeSwitcher = classNames(cls.themeSwitcher)

  return (
    <div className={clsSidebar}>

      <div className={cls.inner}>

        <div className={cls.boxNav}>Nav</div>

        <div className={cls.boxFooter}>
          <Button onClick={toggleHandler}>Toggle</Button>
          <ThemeSwitcher className={clsThemeSwitcher}/>
        </div>

      </div>

    </div>
  )
}
