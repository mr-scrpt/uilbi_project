import { FC, MouseEvent, KeyboardEvent, useRef, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames'
import { ModalProps } from '../type/props.type'
import cls from './Modal.module.scss'

export const Modal: FC<ModalProps> = (props) => {
  const { className, children, isOpen, onClose } = props
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
  )
}
