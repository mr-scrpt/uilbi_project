import { Decorator } from '@storybook/react'
import { StoreProvider } from 'app/provider/StoreProvider'

export const StoreDecorator: Decorator = (StoryComponent) => (
  <StoreProvider>
    <StoryComponent />
  </StoreProvider>
)
