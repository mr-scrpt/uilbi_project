import { createSelector } from '@reduxjs/toolkit'
import { ModalStatusEnum } from 'entity/Modal/type/modal.enum'

import { getModalByName } from '../getModalByName/getModalByName'

export const isModalOpen = (name: string) =>
  createSelector(
    getModalByName(name),

    (modal) =>
      modal?.name === name &&
      modal?.state &&
      modal?.state === ModalStatusEnum.OPEN
  )
