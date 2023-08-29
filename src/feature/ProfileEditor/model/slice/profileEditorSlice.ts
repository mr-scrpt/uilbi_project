import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ProfileData } from 'entity/Profile'
import { ProfileEditorState } from 'feature/ProfileEditor/type/state.type'

const initialState: ProfileEditorState = {
  data: {
    firstname: '',
    lastname: '',
    age: null,
    currency: null,
    country: null,
    city: '',
    avatar: '',
    role: '',
  },
  editable: false,
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
  },
})

export const { actions: profileEditorAction } = profileEditorSlice

export const { reducer: profileEditorReducer } = profileEditorSlice
