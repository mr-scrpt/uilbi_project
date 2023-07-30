import './style/index.scss'
import { useTheme } from 'app/provider/ThemeProvider'

import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames'
import { Navbar } from 'widget/Navbar'
import { Sidebar } from 'widget/Sidebar'
import { Suspense, useEffect, useState } from 'react'
import { Modal } from 'shared/component/Modal'
import cls from './App.module.scss'
import clsTheme from './style/theme/index.module.scss'

import { AppRouter } from './provider/router'

function App() {
  const { theme } = useTheme()

  const [collapsed, setCollapsed] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { t } = useTranslation()

  useEffect(() => {
    console.log('click', isModalOpen)
  }, [isModalOpen])

  const toggleHandler = () => {
    setCollapsed((prev) => !prev)
  }

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
        <div className={cls.inner}>
          <Navbar
            className={cls.boxNavbar}
            onOpenModal={() => setIsModalOpen(true)}
          />
          <div className={cls.boxMain}>
            <Sidebar
              className={clsSidebar}
              collapsed={collapsed}
              toggleHandler={toggleHandler}
            />
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
              {t('test-content-to-modal')}
            </Modal>
            <AppRouter className={cls.boxContent} />
          </div>
          <div className={cls.boxFooter}></div>
        </div>
      </Suspense>
    </div>
  )
}

export default App
