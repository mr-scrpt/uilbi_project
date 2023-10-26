import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ProfileData } from '@/entity/Profile'

import { ProfileEditorState } from '../../type/state.type'
import { validateProfileEditorData } from '../service/validateProfileEditorData'

const initialState: ProfileEditorState = {
  data: {
    id: '',
    firstname: '',
    lastname: '',
    age: null,
    currency: '',
    country: '',
    city: '',
    avatar: '',
    role: '',
  },
  editable: false,
  validationErrors: null,
}

export const profileEditorSlice = createSlice({
  name: 'profileEditor',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<ProfileData>) => {
      state.data = action.payload
      state.validationErrors = null
    },
    setEditable: (state, action: PayloadAction<boolean>) => {
      state.editable = action.payload
      state.validationErrors = null
    },
  },
  extraReducers: (builder) => {
    builder.addCase(validateProfileEditorData.pending, (state) => {
      state.validationErrors = null
    })
    builder.addCase(validateProfileEditorData.fulfilled, (state) => {
      state.validationErrors = null
    })
    builder.addCase(validateProfileEditorData.rejected, (state, action) => {
      state.validationErrors = action.payload || null
    })
  },
})

export const { actions: profileEditorAction } = profileEditorSlice

export const { reducer: profileEditorReducer } = profileEditorSlice
