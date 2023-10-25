import { Ref, forwardRef } from 'react'
import { classNames } from 'shared/lib/classNames'

import { OverlayProps } from '../type/props.type'
import cls from './Overlay.module.scss'

export const Overlay = forwardRef(
  (props: OverlayProps, ref: Ref<HTMLDivElement>) => {
    const { className, onClick, onKeyPress } = props

    const clsOverlay = classNames(cls.overlay, [className], {})
    return (
      <div
        className={clsOverlay}
        ref={ref}
        onClick={onClick}
        onKeyPress={onKeyPress}
        role="button"
        tabIndex={0}
      />
    )
  }
)
