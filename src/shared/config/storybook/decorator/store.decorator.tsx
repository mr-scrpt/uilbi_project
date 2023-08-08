import { StoryFn } from '@storybook/react'
import { PreloadeStateType, StoreProvider } from 'app/provider/StoreProvider'

export const StoreDecorator =
  (state: PreloadeStateType) => (StoryComponent: StoryFn) =>
    (
      <StoreProvider preloadedState={state}>
        <StoryComponent />
      </StoreProvider>
    )
