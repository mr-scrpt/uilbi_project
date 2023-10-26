import { useDrag } from '@use-gesture/react'
import { memo, useCallback, useEffect } from 'react'
import { a, config, useSpring } from 'react-spring'
import { Overlay } from '@/shared/component/Overlay'
import { Portal } from '@/shared/component/Portal'
import { classNames } from '@/shared/lib/classNames'
import { useModal } from '@/shared/lib/hook/useModal/useModal'

import { DrawerProps } from '../type/props.type'
import cls from './Drawer.module.scss'

const height = window.innerHeight - 100

export const Drawer = memo((props: DrawerProps) => {
  const {
    className,
    children,
    isOpen,
    inElement,
    onClose,
    animationDelay = 250,
  } = props

  // const { close, isClosing, isMounted } = useModal({
  //   animationDelay,
  //   onClose,
  //   isOpen,
  // })
  //
  // const clsDrawer = classNames(cls.drawer, [className], {
  //   [cls.drawer_opened]: isOpen,
  //   [cls.drawer_closed]: !isOpen,
  //   [cls.drawer_closing]: isClosing,
  // })

  // if (!isMounted) {
  //   return null
  // }
  const [{ y }, api] = useSpring(() => ({ y: height }))

  const openDrawer = useCallback(() => {
    api.start({ y: 0, immediate: false })
  }, [api])

  useEffect(() => {
    if (isOpen) {
      openDrawer()
    }
  }, [api, isOpen, openDrawer])

  const close = (velocity = 0) => {
    api.start({
      y: height,
      immediate: false,
      config: { ...config.stiff, velocity },
      onResolve: onClose,
    })
  }

  const bind = useDrag(
    ({
      last,
      velocity: [, vy],
      direction: [, dy],
      movement: [, my],
      cancel,
    }) => {
      if (my < -70) cancel()

      if (last) {
        if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
          close()
        } else {
          openDrawer()
        }
      } else {
        api.start({ y: my, immediate: true })
      }
    },
    {
      from: () => [0, y.get()],
      filterTaps: true,
      bounds: { top: 0 },
      rubberband: true,
    }
  )
  // const clsDrawer = classNames(cls.drawer, [className], {
  //   [cls.drawer_opened]: isOpen,
  //   [cls.drawer_closed]: !isOpen,
  //   [cls.drawer_closing]: isClosing,
  // })

  if (!isOpen) {
    return null
  }

  const display = y.to((py) => (py < height ? 'block' : 'none'))

  return (
    <Portal element={inElement}>
      <div className={cls.drawer}>
        <Overlay onClick={close} />
        <a.div
          className={cls.inner}
          style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
          {...bind()}
        >
          <div className={cls.box}>{children}</div>
        </a.div>
      </div>
    </Portal>
  )
})
