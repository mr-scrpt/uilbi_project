import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ModalType } from 'entity/Modal'
import { ModalNameEnum, ModalStatusEnum } from 'entity/Modal/type/modal.enum'
import { ModalState } from 'entity/Modal/type/state.type'

const initialState: ModalState = {
  modalList: [],
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    addModal: ({ modalList }, { payload }: PayloadAction<ModalType>) => {
      modalList.push(payload)
    },

    openModal: (state, action: PayloadAction<{ name: ModalNameEnum }>) => {
      console.log('open modal in aciton')
      state.modalList?.forEach((modal) => {
        if (modal.name === action.payload.name) {
          modal.state = ModalStatusEnum.OPEN
        }
      })
    },
    closeModal: (state, action: PayloadAction<{ name: ModalNameEnum }>) => {
      state.modalList?.forEach((modal) => {
        if (modal.name === action.payload.name) {
          modal.state = ModalStatusEnum.CLOSE
        }
      })
    },
  },
})

export const { actions: modalAction } = modalSlice

export const { reducer: modalReducer } = modalSlice

// addModal: (state, action: PayloadAction<Modal>) =>
//    state.modalList?.push(action.payload)
// ,
// openModal: (state, action: PayloadAction<Modal>) => {
//   state.modalList?.forEach((modal) => {
//     if (modal.name === action.payload.name) {
//       modal.state = ModalStateEnum.OPEN
//     }
//   })
// },
//
