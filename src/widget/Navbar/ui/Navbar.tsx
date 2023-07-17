import { classNames } from "shared/lib/classNames"
import { LinkApp, LinkViewEnum } from "shared/ui/LinkApp"
import { NavbarProps } from "../type/props.type"
import { ThemeSwitcher } from 'widget/ThemeSwitcher';
import cls from './Navbar.module.scss'

export const Navbar = (props : NavbarProps) => {
  const {className} = props

  const clsNavbar = classNames(
      cls.navbar,
      [className]
  )

  const clsInner = classNames(
      cls.inner
  )

  const clsThemeSwitcher = classNames(cls.themeSwitcher)

  const clsMenu = classNames(cls.menu)

  return (
    <div className={clsNavbar}>
      <div className={clsInner}>
      <ThemeSwitcher className={clsThemeSwitcher}/>
      <div className={clsMenu}>
        <LinkApp to={'/'} view={LinkViewEnum.SECONDARY}>Главная</LinkApp>
        <LinkApp to={'/about'} view={LinkViewEnum.SECONDARY}>О сайте</LinkApp>
      </div>
      </div>
    </div>
  )
}