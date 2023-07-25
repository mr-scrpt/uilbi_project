// .storybook/preview.tsx

import { Preview } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

import { StyleDecorator } from '../../src/shared/config/storybook/decorator/style.decorator'
// import { TranslationDecorator } from '../../src/shared/config/storybook/decorator/translation.decorator'

const classApp = 'src-app-App-module_app'
const classTheme = 'src-app-style-theme-index-module_theme'
const classGeometry = 'src-app-App-module_app_geometry'
const classLight = 'src-app-style-theme-index-module_theme_dark'
const classDark = 'src-app-style-theme-index-module_theme_light'

const preview: Preview = {
  decorators: [StyleDecorator],
  parameters: {
    theme: {
      selector: '.src-app-style-theme-index-module_theme',
      dataAttr: 'class',
      nameLightTheme: `${classApp} ${classGeometry} ${classTheme} ${classLight}`,
      nameDarkTheme: `${classApp} ${classGeometry} ${classTheme} ${classDark}`,
    },
    backgrounds: {
      values: [
        { name: 'dark', value: '#090949' },
        { name: 'light', value: '#e8e8ea' },
      ],
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
}

export default preview
