import { useTheme } from 'app/provider/ThemeProvider'
import { getUserIsInited, userAction } from 'entity/User'
import { LoginModal } from 'feature/AuthByUserName'
import {
  getScrollManagerPosition,
  scrollManagerAction,
} from 'feature/ScrollManager'
import { Suspense, useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { ScrollRestoration, useLocation } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames'
import { useAppDispatch } from 'shared/lib/component/useAppDispatch'
import { useThrottle } from 'shared/lib/hook/useThrottle/useThrottle'
import { Navbar } from 'widget/Navbar'
import { Sidebar } from 'widget/Sidebar'

import cls from './App.module.scss'
import { StateSchema } from './provider/StoreProvider'
import { AppRouter } from './provider/router'
import './style/index.scss'
import clsTheme from './style/theme/index.module.scss'

function App() {
  const { theme } = useTheme()
  const isInitedUser = useSelector(getUserIsInited)

  const [collapsed, setCollapsed] = useState(false)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(userAction.initAuth())
  }, [dispatch])

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

  const { pathname } = useLocation()

  const scrollPosition = useSelector((state: StateSchema) =>
    getScrollManagerPosition(state, pathname)
  )

  const onScroll = useThrottle(() => {
    dispatch(
      scrollManagerAction.setScrollData({
        position: window.scrollY,
        path: pathname,
      })
    )
  }, 400)

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    console.log('set scrollPosition', scrollPosition)
    window.screenY = scrollPosition

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [pathname])

  return (
    <div className={clsApp}>
      {isInitedUser && (
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
      )}
      {/* <ScrollRestoration /> */}
    </div>
  )
}

export default App
