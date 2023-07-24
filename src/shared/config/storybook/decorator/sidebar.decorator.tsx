import { classNames } from 'shared/lib/classNames'

import cls from '/src/app/App.module.scss'
import { Decorator } from '@storybook/react'

const clsSidebarOpen = classNames(cls.boxSidebar, [], {
  [cls.boxSidebar_open]: true,
})

export const SidebarOpenDecorator: Decorator = (StoryComponent) => (
  <div style={{ background: 'red' }} className={clsSidebarOpen}>
    <StoryComponent className={clsSidebarOpen} />
  </div>
)

const clsSidebarCollapse = classNames(cls.boxSidebar, [], {
  [cls.boxSidebar_collapse]: true,
})

export const SidebarCollapseDecorator: Decorator = (StoryComponent) => (
  <StoryComponent className={clsSidebarCollapse} />
)
