import { Decorator } from '@storybook/react'
import { classNames } from 'shared/lib/classNames'

import 'app/style/index.scss'
import cls from '/src/app/App.module.scss'

import clsTheme from '/src/app/style/theme/index.module.scss'
import './storybook.scss'

const clsApp = classNames(
  cls.app,
  [clsTheme.theme, cls.app_geometry, 'storybook-wrapper'],
  {
    [clsTheme.theme_light]: true,
    // [clsTheme.theme_dark]: theme === 'theme_dark',
  }
)

// export const StyleDecorator = (story: () => Preview) => story();
export const StyleDecorator: Decorator = (StoryComponent) => (
  <div className={clsApp}>
    <StoryComponent />
  </div>
)
