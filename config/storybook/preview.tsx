// .storybook/preview.tsx

import { Preview } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

import {
  StyleDecorator,
  TranslationDecorator,
} from '../../src/shared/config/storybook/decorator'

const classApp = 'src-app-App-module_app'
const classTheme = 'src-app-style-theme-index-module_theme'
const classGeometry = 'src-app-App-module_app_geometry'
const classLight = 'src-app-style-theme-index-module_theme_dark'
const classDark = 'src-app-style-theme-index-module_theme_light'

const preview: Preview = {
  // globalTypes: {
  //   locale: {
  //     name: 'Locale',
  //     description: 'Internationalization locale',
  //     defaultValue: 'en',
  //     toolbar: {
  //       icon: 'globe',
  //       items: [
  //         { value: 'en', title: 'English' },
  //         { value: 'ru', title: 'Rus' },
  //       ],
  //       showName: false,
  //     },
  //   },
  // },
  decorators: [StyleDecorator, TranslationDecorator],
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
