import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames'
import { Button } from 'shared/component/Button'
import { LangSwitcher } from 'widget/LangSwitcher'

import { ThemeSwitcher } from 'widget/ThemeSwitcher'
import cls from './Sidebar.module.scss'
import { SidebarProps } from './type/props.type'

export const Sidebar: FC<SidebarProps> = (props) => {
  const { className, toggleHandler } = props

  const { t } = useTranslation()

  const clsSidebar = classNames(cls.sidebar, [className])

  const clsThemeSwitcher = classNames(cls.themeSwitcher)

  return (
    <div className={clsSidebar}>
      <div className={cls.inner}>
        <div className={cls.boxNav}>Nav</div>

        <div className={cls.boxFooter}>
          <Button onClick={toggleHandler}>{t('side-bar-toggle')}</Button>
          <ThemeSwitcher className={clsThemeSwitcher} />
          <LangSwitcher />
        </div>
      </div>
    </div>
  )
}
