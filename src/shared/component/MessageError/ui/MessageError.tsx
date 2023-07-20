import { FC } from 'react'
import { classNames } from 'shared/lib/classNames'
import { useTranslation } from 'react-i18next'
import { MessageErrorProps } from '../type/props.type'

import cls from './MessageError.module.scss'

export const MessageError: FC<MessageErrorProps> = (props) => {
  const { className } = props
  const { t } = useTranslation('error_list')

  const clsMessageError = classNames(cls.messageError, [className], {})
  return <div className={clsMessageError}>{t('message-error-page')}</div>
}
