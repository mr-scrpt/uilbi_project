import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames'

import { MessageErrorProps } from '../type/props.type'
import cls from './MessageError.module.scss'

export const MessageError = memo((props: MessageErrorProps) => {
  const { className } = props
  const { t } = useTranslation('error_list')

  const clsMessageError = classNames(cls.messageError, [className], {})
  return <div className={clsMessageError}>{t('message-error-page')}</div>
})
