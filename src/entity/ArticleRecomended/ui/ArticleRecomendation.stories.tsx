import type { Meta, StoryObj } from '@storybook/react'
import { StateSchema } from 'app/provider/StoreProvider'
import { IArticle } from 'entity/Article/type'
import {
  RouterDecorator,
  StoreDecorator,
} from 'shared/config/storybook/decorator'
import { RoleEnum } from 'shared/type/role/role.enum'

// import withMock from 'storybook-addon-mock'
import { ArticleRecomended } from './ArticleRecomended'

const article: IArticle = {
  id: '1',
  img: '',
  createdAt: '',
  views: 123,
  blocks: [],
  tagsId: ['1'],
  title: '123',
  subtitle: 'asfsa',
  user: {
    id: '1',
    username: 'Manager',
    role: [RoleEnum.ADMIN],
    avatar:
      'https://media.istockphoto.com/id/1152537185/photo/hacker-working-on-laptop-in-the-dark.jpg?s=612x612&w=0&k=20&c=S9odRE1_R0xaSQyjwY13tr410NKiJhJFiLRBX-X8c44=',
  },
}

const meta = {
  title: 'entity/ArticleRecomended',
  component: ArticleRecomended,
  decorators: [RouterDecorator, StoreDecorator({} as StateSchema)],
  parameters: {
    layout: 'centered',
    mockData: [
      {
        url: `${__API_URL__}/articles?_limit=3`,
        method: 'GET',
        status: 200,
        response: [
          {
            ...article,
            id: '1',
            img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
          },
          {
            ...article,
            id: '2',
            img: 'https://miro.medium.com/max/1200/1*FNakkrty3kjOvNU8m5iQfw.png',
          },
          {
            ...article,
            id: '3',
            img: 'https://res.cloudinary.com/practicaldev/image/fetch/s--oqV3akcU--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/pgnw91fs7tpxn0wyeqh2.jpg',
          },
        ],
      },
    ],
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ArticleRecomended>

export default meta
type Story = StoryObj<typeof meta>
export const Base: Story = {
  args: {},
}
