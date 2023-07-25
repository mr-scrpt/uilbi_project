import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'
import { ButtonViewEnum } from '../type/view.enum'
import { ButtonSizeEnum } from '../type/size.enum'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Shared/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const ViewPrimary: Story = {
  args: {
    view: ButtonViewEnum.PRIMARY,
    children: 'Button',
  },
}

export const ViewSecondary: Story = {
  args: {
    view: ButtonViewEnum.SECONDARY,
    children: 'Button',
  },
}
export const ViewTertiary: Story = {
  args: {
    view: ButtonViewEnum.TERTIARY,
    children: 'Button',
  },
}

export const Viewtransparent: Story = {
  args: {
    view: ButtonViewEnum.TRANSPARENT,
    children: 'Button',
  },
}

export const SizeS: Story = {
  args: {
    size: ButtonSizeEnum.S,
    children: 'Button',
  },
}
export const SizeM: Story = {
  args: {
    size: ButtonSizeEnum.M,
    children: 'Button',
  },
}
export const SizeL: Story = {
  args: {
    size: ButtonSizeEnum.L,
    children: 'Button',
  },
}
export const SizeXL: Story = {
  args: {
    size: ButtonSizeEnum.XL,
    children: 'Button',
  },
}
