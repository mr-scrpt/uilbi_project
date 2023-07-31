import { FC, KeyboardEvent, MouseEvent, useEffect, useRef } from 'react'
import { Portal } from 'shared/component/Portal'
import { classNames } from 'shared/lib/classNames'

import { ModalProps } from '../type/props.type'
import cls from './Modal.module.scss'

export const Modal: FC<ModalProps> = (props) => {
  const { className, children, isOpen, onClose, inElement } = props
  const overlay = useRef<HTMLDivElement>()

  useEffect(() => {
    if (!isOpen) return
    if (!overlay.current) return
    overlay.current.focus()
  }, [isOpen])

  const clsModal = classNames(cls.modal, [className], {
    [cls.modal_opened]: isOpen,
    [cls.modal_closed]: !isOpen,
  })

  const onCloseDisable = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  const closeModal = () => {
    if (!isOpen) return
    if (!onClose) return
    onClose()
  }

  const onPressEscape = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== 'Escape') return
    onClose()
  }

  return (
    <Portal element={inElement}>
      <div className={clsModal}>
        <div
          className={cls.inner}
          onClick={closeModal}
          onKeyDown={onPressEscape}
          role="button"
          tabIndex={0}
          ref={overlay}
        >
          <div className={cls.box} onClick={onCloseDisable} role="presentation">
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}
