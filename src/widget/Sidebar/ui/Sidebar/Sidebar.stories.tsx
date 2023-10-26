import type { Meta, StoryObj } from '@storybook/react'
import { RouterDecorator } from '@/shared/config/storybook/decorator'
import { classNames } from '@/shared/lib/classNames'

import cls from '../../../../app/App.module.scss'
import { Sidebar } from './Sidebar'

const meta = {
  title: 'Widget/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [RouterDecorator],
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

const clsSidebarOpen = classNames(cls.boxSidebar, [], {
  [cls.boxSidebar_open]: true,
})

const clsSidebarCollapse = classNames(cls.boxSidebar, [], {
  [cls.boxSidebar_collapse]: true,
})
export const Open: Story = {
  args: {
    className: clsSidebarOpen,
  },
}

export const Close: Story = {
  args: {
    className: clsSidebarCollapse,
  },
}
