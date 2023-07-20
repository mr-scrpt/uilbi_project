import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { classNames } from 'shared/lib/classNames'
import { Button } from 'shared/component/Button'
import { LinkApp, LinkViewEnum } from 'shared/component/LinkApp'
import { NavbarProps } from '../type/props.type'
import cls from './Navbar.module.scss'

export function Navbar(props: NavbarProps) {
  const { className } = props

  const { t } = useTranslation()

  const clsNavbar = classNames(cls.navbar, [className])

  const clsInner = classNames(cls.inner)

  const clsMenu = classNames(cls.menu)

  const [errorThrow, setErrorThrow] = useState(false)

  const genError = () => {
    console.log('genError')
    setErrorThrow(true)
  }

  useEffect(() => {
    if (errorThrow) {
      throw new Error('genError')
    }
  }, [errorThrow])

  // useEffect(() => {
  //   throw new Error('genError')
  // }, [])

  return (
    <div className={clsNavbar}>
      <div className={clsInner}>
        <div className={clsMenu}>
          <LinkApp to="/" view={LinkViewEnum.SECONDARY}>
            {t('menu-top-link-main')}
          </LinkApp>
          <Button type="button" view="secondary" onClick={genError}>
            Gen Error
          </Button>
          <LinkApp to="/about" view={LinkViewEnum.SECONDARY}>
            {t('menu-top-link-about')}
          </LinkApp>
        </div>
      </div>
    </div>
  )
}
