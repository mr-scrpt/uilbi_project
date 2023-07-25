import { Decorator } from '@storybook/react'
import { classNames } from 'shared/lib/classNames'

import cls from '../../../../app/App.module.scss'

const clsSidebarOpen = classNames(cls.boxSidebar, [], {
  [cls.boxSidebar_open]: true,
})

export const SidebarOpenDecorator: Decorator = (StoryComponent) => (
  <StoryComponent className={clsSidebarOpen} />
)

const clsSidebarCollapse = classNames(cls.boxSidebar, [], {
  [cls.boxSidebar_collapse]: true,
})

export const SidebarCollapseDecorator: Decorator = (StoryComponent) => (
  <StoryComponent className={clsSidebarCollapse} />
)
