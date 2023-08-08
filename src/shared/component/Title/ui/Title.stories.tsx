import { Meta, StoryObj } from '@storybook/react'

import { TitleSizeEnum } from '../type/size.enum'
import { TitleViewEnum } from '../type/view.enum'
import { Title } from './Title'

const meta = {
  title: 'Shared/Title',
  component: Title,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Title>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const ViewPrimary: Story = {
  args: {
    view: TitleViewEnum.PRIMARY,
    children: 'Title',
  },
}
export const ViewSecondary: Story = {
  args: {
    view: TitleViewEnum.SECONDARY,
    children: 'Title',
  },
}
export const SizeS: Story = {
  args: {
    view: TitleViewEnum.PRIMARY,
    size: TitleSizeEnum.S,
    children: 'Title',
  },
}
export const SizeM: Story = {
  args: {
    view: TitleViewEnum.PRIMARY,
    size: TitleSizeEnum.M,
    children: 'Title',
  },
}
export const SizeL: Story = {
  args: {
    view: TitleViewEnum.PRIMARY,
    size: TitleSizeEnum.L,
    children: 'Title',
  },
}
export const SizeXL: Story = {
  args: {
    view: TitleViewEnum.PRIMARY,
    size: TitleSizeEnum.XL,
    children: 'Title',
  },
}
