import { ModalNameEnum, ModalStatusEnum, modalAction } from 'entity/Modal'
import { isModalOpen } from 'entity/Modal/model/selector/isModalOpen/isModalOpen'
import { FC, Suspense, useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Modal } from 'shared/component/Modal'
import { classNames } from 'shared/lib/classNames'
import { useAppDispatch } from 'shared/lib/component/useAppDispatch'
import { LoaderContent } from 'widget/LoaderContent'

import { LoginFormAsync } from '../../LoginForm'
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
    console.log('modal add')
  }, [addModal])

  const closeModal = () =>
    dispatch(
      modalAction.closeModal({
        name: ModalNameEnum.LOGIN,
      })
    )
  // const closeModal = () => {}

  const isOpen = useSelector(isModalOpen(ModalNameEnum.LOGIN))

  // useEffect(() => {
  //   dispatch(modalAction.openModal({ name: ModalNameEnum.LOGIN }))
  // }, [dispatch])

  useEffect(() => {
    console.log('opening ====>>>', isOpen)
  }, [isOpen])

  const clsLoginModal = classNames(cls.modal, [className], {})

  return (
    <Modal
      className={clsLoginModal}
      isOpen={isOpen}
      onClose={closeModal}
      closeByEscape={false}
    >
      <Suspense fallback={<LoaderContent />}>
        <LoginFormAsync setFocus={isOpen} />
      </Suspense>
    </Modal>
  )
}