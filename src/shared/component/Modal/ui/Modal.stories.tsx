import { Meta, StoryObj } from '@storybook/react'

import { Modal } from './Modal'

const meta = {
  title: 'Shared/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const ModalOpened: Story = {
  args: {
    isOpen: true,
    onClose: () => null,
    children: 'text in modal popup',
  },
}
