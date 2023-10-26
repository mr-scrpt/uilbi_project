import type { Meta, StoryObj } from '@storybook/react'
import { StateSchema } from '@/app/provider/StoreProvider'
import { CountryEnum } from '@/shared/const/country.enum'
import { CurrencyEnum } from '@/shared/const/currency.enum'
import { RoleEnum } from '@/shared/type/role/role.enum'

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
  parameters: {
    mockData: [
      {
        url: `${__API_URL__}/country`,
        method: 'GET',
        status: 200,
        response: [
          {
            name: 'Ukraine',
            abb: 'UA',
          },
          {
            name: 'Poland',
            abb: 'PL',
          },
          {
            name: 'United Kindom',
            abb: 'UK',
          },
          {
            name: 'United State America',
            abb: 'USA',
          },
        ],
      },
      {
        url: `${__API_URL__}/currency`,
        method: 'GET',
        status: 200,
        response: [
          {
            name: 'Hrivna',
            abb: 'UAH',
          },
          {
            name: 'Zlotiy',
            abb: 'PLN',
          },
          {
            name: 'Pound',
            abb: 'GBP',
          },
          {
            name: 'Dollar',
            abb: 'USD',
          },
        ],
      },
    ],
  },
  decorators: [
    RouterDecorator,
    StoreDecorator({
      profile: {
        data: {
          id: '1',
          firstname: 'user',
          lastname: 'lastname',
          age: 30,
          currency: CurrencyEnum.EUR,
          country: CountryEnum.UA,
          city: 'Kharkiv',
          role: RoleEnum.ADMIN,
        },
      },
    } as StateSchema),
  ],
}
