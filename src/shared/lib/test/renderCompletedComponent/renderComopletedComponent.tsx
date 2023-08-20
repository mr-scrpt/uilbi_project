import { render } from '@testing-library/react'
import {
  StateSchema,
  StateSchemaParital,
  StoreProvider,
} from 'app/provider/StoreProvider'
import { ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'
import i18nForTest from 'shared/config/i18n/i18nForTest'

export interface componentRenderOptions {
  route?: string
  preloadedState?: StateSchemaParital
}

export const RenderComopletedComponent = (
  component: ReactNode,
  options: componentRenderOptions = {}
) => {
  const { route = '/', preloadedState } = options
  return render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider preloadedState={preloadedState as StateSchema}>
        <I18nextProvider i18n={i18nForTest}>{component}</I18nextProvider>,
      </StoreProvider>
    </MemoryRouter>
  )
}
