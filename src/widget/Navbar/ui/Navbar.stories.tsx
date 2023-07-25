import type { Meta, StoryObj } from '@storybook/react'

import { classNames } from 'shared/lib/classNames'
import { Navbar } from './Navbar'
import { RouterDecorator } from '../../../shared/config/storybook/decorator/router.decorator'

import cls from '../../../app/App.module.scss'

const meta = {
  title: 'Widget/Navbar',
  component: Navbar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [RouterDecorator],
} satisfies Meta<typeof Navbar>

export default meta
type Story = StoryObj<typeof meta>

const clsNavbar = classNames(cls.boxNavbar)

export const Base: Story = {
  args: {
    className: clsNavbar,
  },
}
