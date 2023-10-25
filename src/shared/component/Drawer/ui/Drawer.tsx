import { memo } from 'react'
import { Overlay } from 'shared/component/Overlay'
import { Portal } from 'shared/component/Portal'
import { classNames } from 'shared/lib/classNames'
import { useModal } from 'shared/lib/hook/useModal/useModal'

import { DrawerProps } from '../type/props.type'
import cls from './Drawer.module.scss'

export const Drawer = memo((props: DrawerProps) => {
  const {
    className,
    children,
    isOpen,
    inElement,
    onClose,
    animationDelay = 250,
  } = props

  const { close, isClosing, isMounted } = useModal({
    animationDelay,
    onClose,
    isOpen,
  })

  const clsDrawer = classNames(cls.drawer, [className], {
    [cls.drawer_opened]: isOpen,
    [cls.drawer_closed]: !isOpen,
    [cls.drawer_closing]: isClosing,
  })

  if (!isMounted) {
    return null
  }
  return (
    <Portal element={inElement}>
      <div className={clsDrawer}>
        <Overlay onClick={close} />
        <div className={cls.inner}>
          <div className={cls.box}>{children}</div>
        </div>
      </div>
    </Portal>
  )
})
