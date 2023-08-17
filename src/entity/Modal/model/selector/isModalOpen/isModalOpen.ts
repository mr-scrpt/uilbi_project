import { createSelector } from '@reduxjs/toolkit'
import { ModalStatusEnum } from 'entity/Modal/type/modal.enum'
import { ModalType } from 'entity/Modal/type/modal.type'

import { getModalByName } from '../getModalByName/getModalByName'

// import { getModalList } from '../getModalList/getModalList'

export const isModalOpen = (name: string) =>
  createSelector(
    getModalByName(name),

    (modal: ModalType) => {
      const result =
        modal?.name === name &&
        modal?.state &&
        modal?.state === ModalStatusEnum.OPEN
      // console.log('in selector', result)
      console.log('modal?.name === name', name, modal?.name === name)
      console.log('modal?.state', modal?.state)
      console.log(
        'modal?.state === ModalStatusEnum.OPEN',
        modal?.state === ModalStatusEnum.OPEN
      )
      return result
    }
  )
