import { Suspense } from 'react'
import { Decorator } from '@storybook/react'
import { I18nextProvider } from 'react-i18next'
// import i18n from 'shared/config/i18n/i18nStorybook'
import i18n from 'shared/config/i18n/i18n'

export const TranslationDecorator: Decorator = (Story) => (
  <Suspense fallback={<div>loading translations...</div>}>
    <I18nextProvider i18n={i18n}>
      <Story />
    </I18nextProvider>
  </Suspense>
)
