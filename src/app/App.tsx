import { useTheme } from 'app/provider/ThemeProvider'
import { LoginModal } from 'feature/AuthByUserName'
import { Suspense, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Modal } from 'shared/component/Modal'
import { classNames } from 'shared/lib/classNames'
import { Navbar } from 'widget/Navbar'
import { Sidebar } from 'widget/Sidebar'

import cls from './App.module.scss'
import { AppRouter } from './provider/router'
import './style/index.scss'
import clsTheme from './style/theme/index.module.scss'

function App() {
  const { theme } = useTheme()

  const [collapsed, setCollapsed] = useState(false)

  const { t } = useTranslation()

  const toggleHandler = useCallback(() => {
    setCollapsed(!collapsed)
  }, [collapsed])

  const clsApp = classNames(cls.app, [clsTheme.theme, cls.app_geometry], {
    [clsTheme.theme_light]: theme === 'theme_light',
    [clsTheme.theme_dark]: theme === 'theme_dark',
  })

  const clsSidebar = classNames(cls.boxSidebar, [], {
    [cls.boxSidebar_collapse]: collapsed,
    [cls.boxSidebar_open]: !collapsed,
  })

  return (
    <div className={clsApp}>
      <Suspense fallback="transslation">
        <LoginModal />

        <div className={cls.inner}>
          <Navbar className={cls.boxNavbar} />
          <div className={cls.boxMain}>
            <Sidebar
              className={clsSidebar}
              collapsed={collapsed}
              toggleHandler={toggleHandler}
            />
            <AppRouter className={cls.boxContent} />
          </div>
          <div className={cls.boxFooter}></div>
        </div>
      </Suspense>
    </div>
  )
}

export default App
