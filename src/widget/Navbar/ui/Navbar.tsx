import { classNames } from "shared/lib/classNames"
import { LinkApp, LinkViewEnum } from "shared/ui/LinkApp"
import { NavbarProps } from "../type/props.type"
import { ThemeSwitcher } from 'widget/ThemeSwitcher';
import cls from './Navbar.module.scss'

export const Navbar = (props : NavbarProps) => {
  const {className} = props

  const classNavbar = classNames(
      cls.navbar,
      [className]
  )

  const classInner = classNames(
      cls.inner
  )

  const classThemeSwitcher = classNames(cls.themeSwitcher)

  const classMenu = classNames(cls.menu)

  return (
    <div className={classNavbar}>
      <div className={classInner}>
      <ThemeSwitcher className={classThemeSwitcher}/>
      <div className={classMenu}>
        <LinkApp to={'/'} view={LinkViewEnum.SECONDARY}>Главная</LinkApp>
        <LinkApp to={'/about'} view={LinkViewEnum.SECONDARY}>О сайте</LinkApp>
      </div>
      </div>
    </div>
  )
}
