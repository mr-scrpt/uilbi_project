import { createSelector } from '@reduxjs/toolkit'

import { getModalList } from '../getModalList/getModalList'

export const getModalByName = (name: string) =>
  createSelector(getModalList, ({ modalList }) =>
    modalList?.find((modal) => modal.name === name)
  )
