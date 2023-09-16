import { memo } from 'react'
import { Icon } from 'shared/component/Icon'
import { classNames } from 'shared/lib/classNames'

import { ButtonIconPositionEnum } from '../type/buttonIconPosition.enum'
import { ButtonProps } from '../type/props.type'
import { ButtonShapeEnum } from '../type/shape.enum'
import { ButtonSizeEnum } from '../type/size.enum'
import { ButtonViewEnum } from '../type/view.enum'
import cls from './style/Button.module.scss'

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    classIcon,
    children,
    view = ButtonViewEnum.PRIMARY,
    size = ButtonSizeEnum.L,
    shape = ButtonShapeEnum.MAIN,
    icon,
    iconPosition = ButtonIconPositionEnum.LEFT,
    disabled,
    ...rest
  } = props

  const clsButton = classNames(cls.button, [className], {
    [cls.view_primary]: view === ButtonViewEnum.PRIMARY,

    [cls.view_secondary]: view === ButtonViewEnum.SECONDARY,
    [cls.view_tertiary]: view === ButtonViewEnum.TERTIARY,
    [cls.view_transparent]:
      view ===
      (ButtonViewEnum.TRANSPARENT || ButtonViewEnum.TRANSPARENT_INVERTED),
    [cls.view_transparent_inverted]:
      view === ButtonViewEnum.TRANSPARENT_INVERTED,

    [cls.size_l]: size === ButtonSizeEnum.L,
    [cls.size_m]: size === ButtonSizeEnum.M,
    [cls.size_s]: size === ButtonSizeEnum.S,
    [cls.size_xl]: size === ButtonSizeEnum.XL,

    [cls.shape_main]: shape === ButtonShapeEnum.MAIN,
    [cls.shape_next]: shape === ButtonShapeEnum.NEXT,
    [cls.shape_flat]: shape === ButtonShapeEnum.FLAT,

    [cls.state_disabled]: disabled,
  })

  const clsText = classNames(cls.text)

  const clsIconButton = classNames(cls.icon, [classIcon])

  return (
    <button type="button" className={clsButton} disabled={disabled} {...rest}>
      {icon && iconPosition === ButtonIconPositionEnum.LEFT && (
        <Icon className={clsIconButton} icon={icon} />
      )}
      {children && <span className={clsText}>{children}</span>}
      {icon && iconPosition === ButtonIconPositionEnum.RIGHT && (
        <Icon className={clsIconButton} icon={icon} />
      )}
    </button>
  )
})
