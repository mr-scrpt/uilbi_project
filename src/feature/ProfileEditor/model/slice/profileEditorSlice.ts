import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ProfileData } from 'entity/Profile'
import { ProfileEditorState } from 'feature/ProfileEditor/type/state.type'
import { ProfileValidateSchema } from 'feature/ProfileEditor/type/validate.schema'
import { ValiError, flatten, parse } from 'valibot'

import { validateProfileEditorData } from '../service/validateProfileEditorData'

const initialState: ProfileEditorState = {
  data: {
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
    },
    setEditable: (state, action: PayloadAction<boolean>) => {
      state.editable = action.payload
    },
    validateData: (state, { payload }: PayloadAction<ProfileData>) => {
      // payload.
      try {
        parse(ProfileValidateSchema, payload)
      } catch (e) {
        const { nested: customError } = flatten(e as ValiError)
        state.validationErrors = customError || null
      }
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(validateProfileEditorData.pending, (state) => {
  //     state.validationErrors = null
  //   })
  //   builder.addCase(validateProfileEditorData.fulfilled, (state) => {
  //     state.validationErrors = null
  //   })
  //   builder.addCase(validateProfileEditorData.rejected, (state, action) => {
  //     state.validationErrors = action.payload || null
  //   })
  // },
})

export const { actions: profileEditorAction } = profileEditorSlice

export const { reducer: profileEditorReducer } = profileEditorSlice
