import { Decorator, Story } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

export const RouterDecorator: Decorator = (StoryComponent: Story) => (
  <BrowserRouter>
    <StoryComponent />
  </BrowserRouter>
)
