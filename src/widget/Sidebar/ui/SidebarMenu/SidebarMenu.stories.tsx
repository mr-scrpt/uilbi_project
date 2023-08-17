import { Meta, StoryObj } from '@storybook/react'
import { LinkModeEnum } from 'shared/component/LinkApp'
import { RouterDecorator } from 'shared/config/storybook/decorator'

import { SidebarMenu } from './SidebarMenu'

const meta = {
  title: 'Widget/SidebarMenu',
  component: SidebarMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SidebarMenu>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultMode: Story = {
  args: {
    mode: LinkModeEnum.DEFAULT,
  },
  decorators: [RouterDecorator],
}

export const IconMode: Story = {
  args: {
    mode: LinkModeEnum.ICON,
  },
  decorators: [RouterDecorator],
}
export const TextMode: Story = {
  args: {
    mode: LinkModeEnum.TEXT,
  },
  decorators: [RouterDecorator],
}
