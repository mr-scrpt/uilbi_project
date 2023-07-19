import { FC } from 'react'
import { classNames } from 'shared/lib/classNames'
import { Icon } from 'shared/ui/Icon'
import { IconPositionEnum } from 'shared/ui/Button/type/iconPosition.enum'
import { ButtonProps } from './type/props.type'
import cls from './Button.module.scss'
import { ButtonViewEnum } from './type/view.enum'

import { ButtonSizeEnum } from './type/size.enum';

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    classIcon,
    children,
    view = ButtonViewEnum.PRIMARY,
    size = ButtonSizeEnum.M,
    icon,
    iconPosition = IconPositionEnum.LEFT,
    ...etc
  } = props

  const clsButton = classNames(cls.button, [className], {
    [cls.view_primary]: view === ButtonViewEnum.PRIMARY,

    [cls.view_secondary]: view === ButtonViewEnum.SECONDARY,

    [cls.size_l]: size === ButtonSizeEnum.L,
    [cls.size_m]: size === ButtonSizeEnum.M,
    [cls.size_s]: size === ButtonSizeEnum.S,
    [cls.size_xl]: size === ButtonSizeEnum.XL,
  })

  const clsText = classNames(cls.text)

  const clsIcon = classNames(cls.icon, [classIcon])

  return (
    <button type="button" className={clsButton} {...etc}>
      {icon && iconPosition === IconPositionEnum.LEFT && (
        <Icon className={clsIcon} icon={icon} />
      )}
      {children && <span className={clsText}>{children}</span>}
      {icon && iconPosition === IconPositionEnum.RIGHT && (
        <Icon className={clsIcon} icon={icon} />
      )}
    </button>
  )
}
