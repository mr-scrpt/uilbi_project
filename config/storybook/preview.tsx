// .storybook/preview.tsx

import React from 'react'

import { Preview } from '@storybook/react'
import { StyleDecorator } from 'shared/config/storybook/decorator/style.decorator'

import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

const preview: Preview = {
  decorators: [StyleDecorator],
  parameters: {
    theme: {
      selector: '.src-app-style-theme-index-module_theme',
      dataAttr: 'class',
      nameLightTheme:
        'src-app-App-module_app src-app-style-theme-index-module_theme src-app-App-module_app_geometry src-app-style-theme-index-module_theme_dark',
      nameDarkTheme:
        'src-app-App-module_app src-app-style-theme-index-module_theme src-app-App-module_app_geometry src-app-style-theme-index-module_theme_light',
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
