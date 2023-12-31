import {
  getProfileEditorData,
  getProfileEditorEditable,
  getProfileEditorErrors,
} from './model/selector'

export type { ProfileEditorState } from './type/state.type'
export { profileEditorAction } from './model/slice/profileEditorSlice'

export const selector = {
  getProfileEditorData,
  getProfileEditorEditable,
  getProfileEditorErrors,
}
