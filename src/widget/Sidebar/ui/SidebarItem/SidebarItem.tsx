import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { LinkApp, LinkSizeEnum, LinkViewEnum } from 'shared/component/LinkApp'

import { SidebarItemProps } from '../../type/props.type'

export const SidebarItem = memo((props: SidebarItemProps) => {
  const { className, to, icon, mode, text } = props
  const { t } = useTranslation('menu_navigation')

  return (
    <LinkApp
      to={to}
      view={LinkViewEnum.SECONDARY}
      size={LinkSizeEnum.XL}
      icon={icon}
      mode={mode}
    >
      {t(text)}
    </LinkApp>
  )
})
