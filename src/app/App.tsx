import { useTheme } from 'app/provider/ThemeProvider'
import { userAction } from 'entity/User'
import { LoginModal } from 'feature/AuthByUserName'
import { Suspense, useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames'
import { useAppDispatch } from 'shared/lib/component/useAppDispatch'
import { Navbar } from 'widget/Navbar'
import { Sidebar } from 'widget/Sidebar'

import cls from './App.module.scss'
import { AppRouter } from './provider/router'
import './style/index.scss'
import clsTheme from './style/theme/index.module.scss'

function App() {
  const { theme } = useTheme()

  const [collapsed, setCollapsed] = useState(false)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(userAction.initAuth())
  }, [dispatch])

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
