import type { Meta, StoryObj } from '@storybook/react'
import { StateSchema } from 'app/provider/StoreProvider'

import {
  RouterDecorator,
  StoreDecorator,
} from '../../../shared/config/storybook/decorator'
import { ProfilePage } from './ProfilePage'

const meta = {
  title: 'Page/ProfilePage',
  component: ProfilePage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProfilePage>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {},
  decorators: [RouterDecorator, StoreDecorator({} as StateSchema)],
}
