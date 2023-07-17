import { useTranslation } from "react-i18next"
import { classNames } from "shared/lib/classNames"
import { LinkApp, LinkViewEnum } from "shared/ui/LinkApp"
import { NavbarProps } from "../type/props.type"
import cls from './Navbar.module.scss'

export const Navbar = (props : NavbarProps) => {
  const {className} = props

  const {t} = useTranslation()

  const clsNavbar = classNames(
      cls.navbar,
      [className]
  )

  const clsInner = classNames(
      cls.inner
  )


  const clsMenu = classNames(cls.menu)

  return (
    <div className={clsNavbar}>
      <div className={clsInner}>
      <div className={clsMenu}>
        <LinkApp to={'/'} view={LinkViewEnum.SECONDARY}>{t('menu-top-link-main')}</LinkApp>
        <LinkApp to={'/about'} view={LinkViewEnum.SECONDARY}>{t('menu-top-link-about')}</LinkApp>
      </div>
      </div>
    </div>
  )
}
