import { FC, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames'
import { Button } from 'shared/component/Button'
import { LangSwitcher } from 'widget/LangSwitcher'

import { ThemeSwitcher } from 'widget/ThemeSwitcher'
import LightIcon from 'shared/asset/icon/theme-dark.svg'
import cls from './Sidebar.module.scss'
import { SidebarProps } from './type/props.type'

export const Sidebar: FC<SidebarProps> = (props) => {
  const { className, toggleHandler } = props

  const { t } = useTranslation()

  const clsSidebar = classNames(cls.sidebar, [className])
  const clsButton = classNames(cls.button, ['button_collapse'])

  const clsThemeSwitcher = classNames(cls.themeSwitcher)
  const [testvar, setTestvar] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      console.log('click')
    }, 1000)
  }, [testvar])

  const handlerClick = () => {
    setTestvar(true)
  }

  return (
    <div className={clsSidebar}>
      <div className={cls.inner}>
        <div className={cls.boxNav}>{t('Nav')}</div>
        <LightIcon onClick={handlerClick} />

        <div className={cls.boxFooter}>
          <Button
            className={clsButton}
            onClick={toggleHandler}
            data-testid="button"
          >
            {t('side-bar-toggle')}
          </Button>
          <ThemeSwitcher className={clsThemeSwitcher} />
          <LangSwitcher />
        </div>
      </div>
    </div>
  )
}
