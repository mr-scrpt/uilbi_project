import { LinkProps } from 'react-router-dom'
import { IconEnum } from 'shared/component/Icon'
import { LinkSizeEnum } from './size.enum'
import { LinkViewEnum } from './view.enum'
import { LinkModeEnum } from './mode.enum'

export interface LinkAppProps extends LinkProps {
  className?: string
  classIcon?: string
  view?: LinkViewEnum
  size?: LinkSizeEnum
  icon?: IconEnum
  mode?: LinkModeEnum
}
