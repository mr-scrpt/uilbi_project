import { createSelector } from '@reduxjs/toolkit'
import { ModalStatusEnum } from 'entity/Modal/type/modal.enum'
import { ModalType } from 'entity/Modal/type/modal.type'

import { getModalByName } from '../getModalByName/getModalByName'

// import { getModalList } from '../getModalList/getModalList'

export const isModalOpen = (name: string) =>
  createSelector(
    getModalByName(name),

    (modal: ModalType) =>
      modal?.name === name &&
      modal?.state &&
      modal?.state === ModalStatusEnum.OPEN
  )
