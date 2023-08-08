import { Meta, StoryObj } from '@storybook/react'
import { PreloadeStateType } from 'app/provider/StoreProvider'
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
        username: '123',
        password: 'asd',
        isLoading: false,
        error: null,
      },
    } as PreloadeStateType),
  ],
}
export const LoginFormWithError: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      login: {
        username: 'user with error',
        password: 'password',
        isLoading: false,
        error: 'error message',
      },
    } as PreloadeStateType),
  ],
}

export const LoginFormOnSendRequest: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      login: {
        username: 'user',
        password: 'password',
        isLoading: true,
        error: null,
      },
    } as PreloadeStateType),
  ],
}
