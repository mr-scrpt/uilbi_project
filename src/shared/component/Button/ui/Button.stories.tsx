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
  // argTypes: {
  //   size: {
  //     table: {
  //       defaultValue: { summary: ButtonSizeEnum.L },
  //       type: { summary: 'string' },
  //     },
  //     control: {
  //       type: 'radio',
  //       accept: 'l',
  //     },
  //   },
  // },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const View_Primary: Story = {
  args: {
    view: ButtonViewEnum.PRIMARY,
    children: 'Button',
  },
}

export const View_Secondary: Story = {
  args: {
    view: ButtonViewEnum.SECONDARY,
    children: 'Button',
  },
}
export const View_Tertiary: Story = {
  args: {
    view: ButtonViewEnum.TERTIARY,
    children: 'Button',
  },
}

export const View_transparent: Story = {
  args: {
    view: ButtonViewEnum.TRANSPARENT,
    children: 'Button',
  },
}

export const Size_S: Story = {
  args: {
    size: ButtonSizeEnum.S,
    children: 'Button',
  },
}
export const Size_M: Story = {
  args: {
    size: ButtonSizeEnum.M,
    children: 'Button',
  },
}
export const Size_L: Story = {
  args: {
    size: ButtonSizeEnum.L,
    children: 'Button',
  },
}
export const Size_XL: Story = {
  args: {
    size: ButtonSizeEnum.XL,
    children: 'Button',
  },
}

// export const Secondary: Story = {
//   args: {
//     children: 'Button',
//   },
// }
//
// export const Large: Story = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// }
//
// export const Small: Story = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// }
