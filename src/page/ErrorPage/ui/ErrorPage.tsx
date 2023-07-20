import { FC, Suspense } from 'react'
import { LoaderContent } from 'widget/LoaderContent'
import { classNames } from 'shared/lib/classNames'
import { MessageError } from 'shared/component/MessageError'
import { Button } from 'shared/component/Button'
import { useTranslation } from 'react-i18next'
import { ErrorPageProps } from '../type/props.type'

import cls from './ErrorPage.module.scss'

export const ErrorPage: FC<ErrorPageProps> = (props) => {
  const { className } = props

  const { t } = useTranslation('page_error')

  const clsErrorPage = classNames(cls.errorPage, [className], {})
  return (
    <Suspense fallback={<LoaderContent />}>
      <div className={clsErrorPage}>
        <MessageError className={cls.text} />
        <Button
          type="button"
          className={cls.button}
          onClick={() => window.location.reload()}
        >
          {t('page-error-reloade')}
        </Button>
      </div>
    </Suspense>
  )
}
