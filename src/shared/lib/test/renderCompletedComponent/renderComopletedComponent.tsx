import { render } from '@testing-library/react'
import {
  PartialStateType,
  RootStateType,
  StoreProvider,
} from 'app/provider/StoreProvider'
import { ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'
import i18nForTest from 'shared/config/i18n/i18nForTest'

export interface componentRenderOptions {
  route?: string
  preloadedState?: PartialStateType
}

export const RenderComopletedComponent = (
  component: ReactNode,
  options: componentRenderOptions = {}
) => {
  const { route = '/', preloadedState } = options
  return render(
    <StoreProvider preloadedState={preloadedState as RootStateType}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18nForTest}>{component}</I18nextProvider>,
      </MemoryRouter>
    </StoreProvider>
  )
}
