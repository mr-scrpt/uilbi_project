import type { Meta, StoryObj } from '@storybook/react'

import { InputSizeEnum } from '../type/size.enum'
import { InputStateEnum } from '../type/state.enum'
import { InputViewEnum } from '../type/view.enum'
import { Input } from './Input'

const meta = {
  title: 'Shared/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const ViewPrimary: Story = {
  args: {
    view: InputViewEnum.PRIMARY,
    name: 'name',
    children: 'Text',
    placeholder: 'Placeholder',
  },
}

export const ViewSecondary: Story = {
  args: {
    view: InputViewEnum.SECONDARY,
    name: 'name',
    children: 'Text',
    placeholder: 'Placeholder',
  },
}

export const SizeS: Story = {
  args: {
    size: InputSizeEnum.S,
    name: 'name',
    children: 'Text',
    placeholder: 'Placeholder S',
  },
}

export const SizeM: Story = {
  args: {
    size: InputSizeEnum.M,
    name: 'name',
    children: 'Text',
    placeholder: 'Placeholder M',
  },
}

export const SizeL: Story = {
  args: {
    size: InputSizeEnum.L,
    name: 'name',
    children: 'Text',
    placeholder: 'Placeholder L',
  },
}

export const SizeXL: Story = {
  args: {
    size: InputSizeEnum.XL,
    name: 'name',
    children: 'Text',
    placeholder: 'Placeholder XL',
  },
}

export const StateError: Story = {
  args: {
    state: InputStateEnum.ERROR,
    name: 'name',
    children: 'Text',
    placeholder: 'Placeholder S',
  },
}

export const StateSuccess: Story = {
  args: {
    state: InputStateEnum.SUCCESS,
    name: 'name',
    children: 'Text',
    placeholder: 'Placeholder S',
  },
}

export const Disabled: Story = {
  args: {
    state: InputStateEnum.SUCCESS,
    name: 'name',
    children: 'Text',
    placeholder: 'Placeholder S',
    disabled: true,
  },
}
