import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, ButtonViewEnum } from 'shared/component/Button'
import { classNames } from 'shared/lib/classNames'

import { EditorBarProps } from '../type/props.type'
import cls from './EditorBar.module.scss'

export const EditorBar = memo((props: EditorBarProps) => {
  const { className, reset, save } = props
  const { t } = useTranslation('profile_editor')

  const clsEditorBar = classNames(cls.editorBar, [className], {})
  return (
    <div className={clsEditorBar}>
      <div className={cls.inner}></div>
      <Button onClick={save}>{t('profile-save-button')}</Button>
      <Button onClick={reset} view={ButtonViewEnum.SECONDARY}>
        {t('profile-reset-button')}
      </Button>
    </div>
  )
})
