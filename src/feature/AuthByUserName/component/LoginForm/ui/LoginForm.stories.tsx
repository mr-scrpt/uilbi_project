import { Meta, StoryObj } from '@storybook/react'
import { StateSchema } from 'app/provider/StoreProvider'
import { StoreDecorator } from 'shared/config/storybook/decorator'

import { LoginForm } from './LoginForm'

const meta = {
  title: 'Feature/LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>

export const LoginFormMain: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      login: {
        data: {
          username: 'user',
          password: 'password',
        },
        isLoading: false,
        error: null,
      },
    } as StateSchema),
  ],
}
export const LoginFormWithError: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      login: {
        data: {
          username: 'user',
          password: 'password',
        },

        isLoading: false,
        error: 'error message',
      },
    } as StateSchema),
  ],
}

export const LoginFormOnSendRequest: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      login: {
        data: {
          username: 'user',
          password: 'password',
        },

        isLoading: true,
        error: null,
      },
    } as StateSchema),
  ],
}
