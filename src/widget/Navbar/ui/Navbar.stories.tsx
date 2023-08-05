import type { Meta, StoryObj } from '@storybook/react'
import { classNames } from 'shared/lib/classNames'

import cls from '../../../app/App.module.scss'
import {
  RouterDecorator,
  StoreDecorator,
} from '../../../shared/config/storybook/decorator'
import { Navbar } from './Navbar'

const meta = {
  title: 'Widget/Navbar',
  component: Navbar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [RouterDecorator, StoreDecorator],
} satisfies Meta<typeof Navbar>

export default meta
type Story = StoryObj<typeof meta>

const clsNavbar = classNames(cls.boxNavbar)

export const Base: Story = {
  args: {
    className: clsNavbar,
  },
}
