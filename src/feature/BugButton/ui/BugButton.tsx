import { FC, useEffect, useState } from 'react'
import { ButtonViewEnum } from 'shared/component/Button/type/view.enum'
import { classNames } from 'shared/lib/classNames'
import { Button } from 'shared/component/Button'
import { useTranslation } from 'react-i18next'
import { BugButtonProps } from '../type/props.type'

import cls from './BugButton.module.scss'

export const BugButton: FC<BugButtonProps> = (props) => {
  const { className } = props

  const [errorThrow, setErrorThrow] = useState(false)

  const genError = () => {
    setErrorThrow(true)
  }

  useEffect(() => {
    if (errorThrow) {
      throw new Error('Test error generation')
    }
  }, [errorThrow])

  const clsBugButton = classNames(cls.bugButton, [className], {})

  const { t } = useTranslation('error_list')

  return (
    <div className={clsBugButton}>
      <Button type="button" view={ButtonViewEnum.SECONDARY} onClick={genError}>
        {t('error-gen-error-button')}
      </Button>
    </div>
  )
}
