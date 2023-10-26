import { StoryFn } from '@storybook/react'
import { StateSchema, StoreProvider } from '@/app/provider/StoreProvider'
import { ReducerListMapObject } from '@/app/provider/StoreProvider/type/state.type'
import { profileReducer } from '@/entity/Profile'
import { loginReducer } from '@/feature/AuthByUserName'
import { ReducerList } from '@/shared/lib/component/DynamicModuleLoader/type/props.type'

const defaultAsyncReducer: ReducerList = {
  login: loginReducer,
  profile: profileReducer,
}

export const StoreDecorator =
  (state: StateSchema, asyncReducers?: ReducerList) =>
  (StoryComponent: StoryFn) =>
    (
      <StoreProvider
        preloadedState={state}
        asyncReducer={{
          ...(defaultAsyncReducer as ReducerListMapObject),
          ...(asyncReducers as ReducerListMapObject),
        }}
      >
        <StoryComponent />
      </StoreProvider>
    )
