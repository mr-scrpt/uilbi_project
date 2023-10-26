import { FC } from 'react'
import { Overlay } from '@/shared/component/Overlay'
import { Portal } from '@/shared/component/Portal'
import { classNames } from '@/shared/lib/classNames'
import { useModal } from '@/shared/lib/hook/useModal/useModal'

import { ModalProps } from '../type/props.type'
import cls from './Modal.module.scss'

export const Modal: FC<ModalProps> = (props) => {
  const {
    className,
    children,
    isOpen,
    onClose,
    inElement,
    animationDelay = 250,
  } = props

  const { close, isClosing, isMounted } = useModal({
    animationDelay,
    onClose,
    isOpen,
  })

  const clsModal = classNames(cls.modal, [className], {
    [cls.modal_opened]: isOpen,
    [cls.modal_closed]: !isOpen,
    [cls.modal_closing]: isClosing,
  })

  if (!isMounted) return null

  return (
    <Portal element={inElement}>
      <div className={clsModal}>
        <Overlay onClick={close} />
        <div className={cls.inner}>
          <div className={cls.box}>{children}</div>
        </div>
      </div>
    </Portal>
  )
}
