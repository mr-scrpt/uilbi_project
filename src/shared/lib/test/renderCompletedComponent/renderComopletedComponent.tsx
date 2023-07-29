import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18nForTest from 'shared/config/i18n/i18nForTest'

export interface componentRenderOptions {
  route?: string
}

export const RenderComopletedComponent = (
  component: ReactNode,
  options: componentRenderOptions = {}
) => {
  const { route = '/' } = options
  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18nForTest}>{component}</I18nextProvider>,
    </MemoryRouter>
  )
}
