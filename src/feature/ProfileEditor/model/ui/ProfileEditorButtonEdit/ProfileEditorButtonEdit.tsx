import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/shared/component/Button'
import { classNames } from '@/shared/lib/classNames'

import { ProfileEditorButtonEditProps } from '../../../type/props.type'
import cls from './ProfileEditorButtonEdit.module.scss'

export const ProfileEditorButtonEdit = memo(
  (props: ProfileEditorButtonEditProps) => {
    const { className } = props
    const { t } = useTranslation('profile-editor')

    const clsProfileEditorButtonEdit = classNames(
      cls.editorButton,
      [className],
      {}
    )
    return (
      <Button className={clsProfileEditorButtonEdit}>
        {t('profile-edit-button')}
      </Button>
    )
  }
)
