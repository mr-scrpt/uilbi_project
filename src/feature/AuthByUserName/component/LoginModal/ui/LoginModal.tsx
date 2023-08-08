import { ModalNameEnum, ModalStatusEnum, modalAction } from 'entity/Modal'
import { isModalOpen } from 'entity/Modal/model/selector/isModalOpen/isModalOpen'
import { FC, useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Modal } from 'shared/component/Modal'
import { classNames } from 'shared/lib/classNames'
import { useAppDispatch } from 'shared/lib/hook/useAppDispatch'

import { LoginForm } from '../../LoginForm/ui/LoginForm'
import { LoginModalProps } from '../type/props.type'
import cls from './LoginModal.module.scss'

export const LoginModal: FC<LoginModalProps> = (props) => {
  const { className } = props

  const dispatch = useAppDispatch()

  const addModal = useCallback(
    (name: string) =>
      dispatch(modalAction.addModal({ name, state: ModalStatusEnum.CLOSE })),
    [dispatch]
  )

  useEffect(() => {
    addModal(ModalNameEnum.LOGIN)
  }, [addModal])

  const closeModal = () =>
    dispatch(
      modalAction.closeModal({
        name: ModalNameEnum.LOGIN,
      })
    )

  const isOpen = useSelector(isModalOpen(ModalNameEnum.LOGIN))

  const clsLoginModal = classNames(cls.modal, [className], {})

  return (
    <Modal
      className={clsLoginModal}
      isOpen={isOpen}
      onClose={closeModal}
      closeByEscape={false}
    >
      <LoginForm setFocus={isOpen} />
    </Modal>
  )
}
