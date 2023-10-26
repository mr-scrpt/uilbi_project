import { Decorator } from '@storybook/react'
import { ThemeProvider } from '@/app/provider/ThemeProvider'
import '@/app/style/index.scss'
import { classNames } from '@/shared/lib/classNames'

import cls from '../../../../app/App.module.scss'
import clsTheme from '../../../../app/style/theme/index.module.scss'
import './storybook.scss'

const clsApp = classNames(
  cls.app,
  [clsTheme.theme, cls.app_geometry, 'storybook-wrapper'],
  {
    [clsTheme.theme_light]: true,
    // [clsTheme.theme_dark]: true,
  }
)

export const StyleDecorator: Decorator = (StoryComponent) => (
  <ThemeProvider>
    <div className={clsApp}>
      <StoryComponent />
    </div>
  </ThemeProvider>
)
