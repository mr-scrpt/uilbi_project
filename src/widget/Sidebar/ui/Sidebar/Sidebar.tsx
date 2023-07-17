import { FC, useState } from "react"
import { classNames } from "shared/lib/classNames"
import { Button } from "shared/ui/Button"

import cls from './Sidebar.module.scss'
import { SidebarProps } from "./type/props.type"

export const Sidebar:FC<SidebarProps> = (props) => {
  const {className} = props
  const [collapsed, setCollapsed] = useState(false)

  const clsSidebar = classNames(cls.sidebar, [className], {
    [cls.collapsed]: collapsed
  })

  const toggleHandlet = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div className={clsSidebar}>

      <div className={cls.inner}>

        <div className={cls.boxNav}>Nav</div>

        <div className={cls.boxFooter}>
          <Button onClick={toggleHandlet}>Toggle</Button>
        </div>

      </div>

    </div>
  )
}
