import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit'
import { StoryFn } from '@storybook/react'
import { StateSchema, StoreProvider } from 'app/provider/StoreProvider'
import { profileReducer } from 'entity/Profile'
import { loginReducer } from 'feature/AuthByUserName'

const defaultAsyncReducer: DeepPartial<ReducersMapObject<StateSchema>> = {
  login: loginReducer,
  profile: profileReducer,
}

export const StoreDecorator =
  (
    state: StateSchema,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
  ) =>
  (StoryComponent: StoryFn) =>
    (
      <StoreProvider
        preloadedState={state}
        asyncReducer={{
          ...(defaultAsyncReducer as ReducersMapObject<StateSchema>),
          ...(asyncReducers as ReducersMapObject<StateSchema>),
        }}
      >
        <StoryComponent />
      </StoreProvider>
    )