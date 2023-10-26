import type { Meta, StoryObj } from '@storybook/react'
import { IconEnum } from '@/shared/component/Icon'

import { ButtonIconPositionEnum } from '../type/buttonIconPosition.enum'
import { ButtonShapeEnum } from '../type/shape.enum'
import { ButtonSizeEnum } from '../type/size.enum'
import { ButtonViewEnum } from '../type/view.enum'
import { Button } from './Button'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Shared/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const ViewPrimary: Story = {
  args: {
    view: ButtonViewEnum.PRIMARY,
    children: 'Button',
  },
}

export const ViewSecondary: Story = {
  args: {
    view: ButtonViewEnum.SECONDARY,
    children: 'Button',
  },
}
export const ViewTertiary: Story = {
  args: {
    view: ButtonViewEnum.TERTIARY,
    children: 'Button',
  },
}

export const ViewTransparent: Story = {
  args: {
    view: ButtonViewEnum.TRANSPARENT,
    children: 'Button',
  },
}
export const ViewTransparentInverted: Story = {
  args: {
    view: ButtonViewEnum.TRANSPARENT_INVERTED,
    children: 'Button',
  },
}

export const StateDisabled: Story = {
  args: {
    disabled: true,
    children: 'Button',
  },
}

export const SizeSShapeMain: Story = {
  args: {
    size: ButtonSizeEnum.S,
    children: 'Button',
  },
}
export const SizeMShapeMain: Story = {
  args: {
    size: ButtonSizeEnum.M,
    children: 'Button',
  },
}
export const SizeLShapeMain: Story = {
  args: {
    size: ButtonSizeEnum.L,
    children: 'Button',
  },
}
export const SizeXLShapeMain: Story = {
  args: {
    size: ButtonSizeEnum.XL,
    children: 'Button',
  },
}
// ====
export const SizeSShapeNext: Story = {
  args: {
    size: ButtonSizeEnum.S,
    children: 'Button',
    shape: ButtonShapeEnum.NEXT,
  },
}
export const SizeMShapeNext: Story = {
  args: {
    size: ButtonSizeEnum.M,
    children: 'Button',
    shape: ButtonShapeEnum.NEXT,
  },
}
export const SizeLShapeNext: Story = {
  args: {
    size: ButtonSizeEnum.L,
    children: 'Button',
    shape: ButtonShapeEnum.NEXT,
  },
}
export const SizeXLShapeNext: Story = {
  args: {
    size: ButtonSizeEnum.XL,
    children: 'Button',
    shape: ButtonShapeEnum.NEXT,
  },
}

export const SizeSShapeFlat: Story = {
  args: {
    size: ButtonSizeEnum.S,
    children: 'Button',
    shape: ButtonShapeEnum.FLAT,
  },
}
export const SizeMShapeFlat: Story = {
  args: {
    size: ButtonSizeEnum.M,
    children: 'Button',
    shape: ButtonShapeEnum.FLAT,
  },
}
export const SizeLShapeFlat: Story = {
  args: {
    size: ButtonSizeEnum.L,
    children: 'Button',
    shape: ButtonShapeEnum.FLAT,
  },
}
export const SizeXLShapeFlat: Story = {
  args: {
    size: ButtonSizeEnum.XL,
    children: 'Button',
    shape: ButtonShapeEnum.FLAT,
  },
}

//

export const ShapeMainWithIconSizeS: Story = {
  args: {
    size: ButtonSizeEnum.S,
    shape: ButtonShapeEnum.MAIN,
    icon: IconEnum.BURGER,
    children: 'Button',
  },
}

export const ShapeMainWithIconSizeM: Story = {
  args: {
    size: ButtonSizeEnum.M,
    shape: ButtonShapeEnum.MAIN,
    icon: IconEnum.BURGER,
    children: 'Button',
  },
}

export const ShapeMainWithIconSizeL: Story = {
  args: {
    size: ButtonSizeEnum.L,
    shape: ButtonShapeEnum.MAIN,
    icon: IconEnum.BURGER,
    children: 'Button',
  },
}

export const ShapeMainWithIconSizeXL: Story = {
  args: {
    size: ButtonSizeEnum.XL,
    shape: ButtonShapeEnum.MAIN,
    icon: IconEnum.BURGER,
    children: 'Button',
  },
}

export const ShapeNextWithIconSizeS: Story = {
  args: {
    size: ButtonSizeEnum.S,
    shape: ButtonShapeEnum.NEXT,
    icon: IconEnum.BURGER,
    children: 'Button',
  },
}

export const ShapeNextWithIconSizeM: Story = {
  args: {
    size: ButtonSizeEnum.M,
    shape: ButtonShapeEnum.NEXT,
    icon: IconEnum.BURGER,
    children: 'Button',
  },
}

export const ShapeNextWithIconSizeL: Story = {
  args: {
    size: ButtonSizeEnum.L,
    shape: ButtonShapeEnum.NEXT,
    icon: IconEnum.BURGER,
    children: 'Button',
  },
}

export const ShapeNextWithIconSizeXL: Story = {
  args: {
    size: ButtonSizeEnum.XL,
    shape: ButtonShapeEnum.NEXT,
    icon: IconEnum.BURGER,
    children: 'Button',
  },
}

// ====================================

export const ShapeFlatWithIconSizeS: Story = {
  args: {
    size: ButtonSizeEnum.S,
    shape: ButtonShapeEnum.FLAT,
    icon: IconEnum.BURGER,
    children: 'Button',
  },
}

export const ShapeFlatWithIconSizeM: Story = {
  args: {
    size: ButtonSizeEnum.M,
    shape: ButtonShapeEnum.FLAT,
    icon: IconEnum.BURGER,
    children: 'Button',
  },
}

export const ShapeFlatWithIconSizeL: Story = {
  args: {
    size: ButtonSizeEnum.L,
    shape: ButtonShapeEnum.FLAT,
    icon: IconEnum.BURGER,
    children: 'Button',
  },
}

export const ShapeFlatWithIconSizeXL: Story = {
  args: {
    size: ButtonSizeEnum.XL,
    shape: ButtonShapeEnum.FLAT,
    icon: IconEnum.BURGER,
    children: 'Button',
  },
}

// START

export const ShapeMainWithIconRightSizeS: Story = {
  args: {
    size: ButtonSizeEnum.S,
    shape: ButtonShapeEnum.MAIN,
    icon: IconEnum.BURGER,
    iconPosition: ButtonIconPositionEnum.RIGHT,
    children: 'Button',
  },
}

export const ShapeMainWithIconRightSizeM: Story = {
  args: {
    size: ButtonSizeEnum.M,
    shape: ButtonShapeEnum.MAIN,
    icon: IconEnum.BURGER,
    iconPosition: ButtonIconPositionEnum.RIGHT,
    children: 'Button',
  },
}

export const ShapeMainWithIconRightSizeL: Story = {
  args: {
    size: ButtonSizeEnum.L,
    shape: ButtonShapeEnum.MAIN,
    icon: IconEnum.BURGER,
    iconPosition: ButtonIconPositionEnum.RIGHT,
    children: 'Button',
  },
}

export const ShapeMainWithIconRightSizeXL: Story = {
  args: {
    size: ButtonSizeEnum.XL,
    shape: ButtonShapeEnum.MAIN,
    icon: IconEnum.BURGER,
    iconPosition: ButtonIconPositionEnum.RIGHT,
    children: 'Button',
  },
}

export const ShapeNextWithIconRightSizeS: Story = {
  args: {
    size: ButtonSizeEnum.S,
    shape: ButtonShapeEnum.NEXT,
    icon: IconEnum.BURGER,
    iconPosition: ButtonIconPositionEnum.RIGHT,
    children: 'Button',
  },
}

export const ShapeNextWithIconRightSizeM: Story = {
  args: {
    size: ButtonSizeEnum.M,
    shape: ButtonShapeEnum.NEXT,
    icon: IconEnum.BURGER,
    iconPosition: ButtonIconPositionEnum.RIGHT,
    children: 'Button',
  },
}

export const ShapeNextWithIconRightSizeL: Story = {
  args: {
    size: ButtonSizeEnum.L,
    shape: ButtonShapeEnum.NEXT,
    icon: IconEnum.BURGER,
    iconPosition: ButtonIconPositionEnum.RIGHT,
    children: 'Button',
  },
}

export const ShapeNextWithIconRightSizeXL: Story = {
  args: {
    size: ButtonSizeEnum.XL,
    shape: ButtonShapeEnum.NEXT,
    icon: IconEnum.BURGER,
    iconPosition: ButtonIconPositionEnum.RIGHT,
    children: 'Button',
  },
}

// ====================================

export const ShapeFlatWithIconRightSizeS: Story = {
  args: {
    size: ButtonSizeEnum.S,
    shape: ButtonShapeEnum.FLAT,
    icon: IconEnum.BURGER,
    iconPosition: ButtonIconPositionEnum.RIGHT,
    children: 'Button',
  },
}

export const ShapeFlatWithIconRightSizeM: Story = {
  args: {
    size: ButtonSizeEnum.M,
    shape: ButtonShapeEnum.FLAT,
    icon: IconEnum.BURGER,
    iconPosition: ButtonIconPositionEnum.RIGHT,
    children: 'Button',
  },
}

export const ShapeFlatWithIconRightSizeL: Story = {
  args: {
    size: ButtonSizeEnum.L,
    shape: ButtonShapeEnum.FLAT,
    icon: IconEnum.BURGER,
    iconPosition: ButtonIconPositionEnum.RIGHT,
    children: 'Button',
  },
}

export const ShapeFlatWithIconRightSizeXL: Story = {
  args: {
    size: ButtonSizeEnum.XL,
    shape: ButtonShapeEnum.FLAT,
    icon: IconEnum.BURGER,
    iconPosition: ButtonIconPositionEnum.RIGHT,
    children: 'Button',
  },
}
// END
export const ShapeMainOnlyIconSizeS: Story = {
  args: {
    size: ButtonSizeEnum.S,
    shape: ButtonShapeEnum.MAIN,
    icon: IconEnum.BURGER,
  },
}

export const ShapeMainOnlyIconSizeM: Story = {
  args: {
    size: ButtonSizeEnum.M,
    shape: ButtonShapeEnum.MAIN,
    icon: IconEnum.BURGER,
  },
}
export const ShapeMainOnlyIconSizeL: Story = {
  args: {
    size: ButtonSizeEnum.L,
    shape: ButtonShapeEnum.MAIN,
    icon: IconEnum.BURGER,
  },
}
export const ShapeMainOnlyIconSizeXL: Story = {
  args: {
    size: ButtonSizeEnum.XL,
    shape: ButtonShapeEnum.MAIN,
    icon: IconEnum.BURGER,
  },
}

// ==88888.
export const ShapeNextOnlyIconSizeS: Story = {
  args: {
    size: ButtonSizeEnum.S,
    shape: ButtonShapeEnum.NEXT,
    icon: IconEnum.BURGER,
  },
}

export const ShapeNextOnlyIconSizeM: Story = {
  args: {
    size: ButtonSizeEnum.M,
    shape: ButtonShapeEnum.NEXT,
    icon: IconEnum.BURGER,
  },
}
export const ShapeNextOnlyIconSizeL: Story = {
  args: {
    size: ButtonSizeEnum.L,
    shape: ButtonShapeEnum.NEXT,
    icon: IconEnum.BURGER,
  },
}
export const ShapeNextOnlyIconSizeXL: Story = {
  args: {
    size: ButtonSizeEnum.XL,
    shape: ButtonShapeEnum.NEXT,
    icon: IconEnum.BURGER,
  },
}

// ==88888.
export const ShapeFlatOnlyIconSizeS: Story = {
  args: {
    size: ButtonSizeEnum.S,
    shape: ButtonShapeEnum.FLAT,
    icon: IconEnum.BURGER,
  },
}

export const ShapeFlatNextIconSizeM: Story = {
  args: {
    size: ButtonSizeEnum.M,
    shape: ButtonShapeEnum.FLAT,
    icon: IconEnum.BURGER,
  },
}
export const ShapeFlatNextIconSizeL: Story = {
  args: {
    size: ButtonSizeEnum.L,
    shape: ButtonShapeEnum.FLAT,
    icon: IconEnum.BURGER,
  },
}
export const ShapeFlatOnlyIconSizeXL: Story = {
  args: {
    size: ButtonSizeEnum.XL,
    shape: ButtonShapeEnum.FLAT,
    icon: IconEnum.BURGER,
  },
}
