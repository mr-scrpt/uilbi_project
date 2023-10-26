import { Overlay } from '@/shared/component/Overlay'
import { Portal } from '@/shared/component/Portal'
import {
  AnimationProvider,
  useAnimationLibs,
} from '@/shared/lib/component/AnimationLibProvider/AnimationLibProvider'
import { memo, useCallback, useEffect } from 'react'

import { DrawerProps } from '../type/props.type'
import cls from './Drawer.module.scss'

const height = window.innerHeight - 100

export const DrawerContent = memo((props: DrawerProps) => {
  const { children, isOpen, inElement, onClose } = props

  const { Spring, Gesture } = useAnimationLibs()

  const [{ y }, api] = Spring.useSpring(() => ({ y: height }))

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
      config: { ...Spring.config.stiff, velocity },
      onResolve: onClose,
    })
  }

  const bind = Gesture.useDrag(
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

  if (!isOpen) {
    return null
  }

  const display = y.to((py) => (py < height ? 'block' : 'none'))

  return (
    <Portal element={inElement}>
      <div className={cls.drawer}>
        <Overlay onClick={close} />
        <Spring.a.div
          className={cls.inner}
          style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
          {...bind()}
        >
          <div className={cls.box}>{children}</div>
        </Spring.a.div>
      </div>
    </Portal>
  )
})

const DrawerAsync = (props: DrawerProps) => {
  const { isLoaded } = useAnimationLibs()

  if (!isLoaded) {
    return null
  }

  return <DrawerContent {...props} />
}

export const Drawer = (props: DrawerProps) => (
  <AnimationProvider>
    <DrawerAsync {...props} />
  </AnimationProvider>
)
