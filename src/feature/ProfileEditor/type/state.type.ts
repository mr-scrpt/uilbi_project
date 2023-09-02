import { ProfileData } from 'entity/Profile'

import { ProfileValidateType } from './validate.schema'
import { ProfileEditorValidateType } from './validate.type'

export interface ProfileEditorState {
  data: ProfileData
  editable: boolean
  validationErrors: ProfileEditorValidateType | null
}
