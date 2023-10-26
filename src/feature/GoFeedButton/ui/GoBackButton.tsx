import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { LinkApp } from '@/shared/component/LinkApp'
import { RoutePath } from '@/shared/config/configRouter/configRouter'
import { classNames } from '@/shared/lib/classNames'

import { GoBackButtonProps } from '../type/props.type'
import cls from './GoBackButton.module.scss'

export const GoFeedButton = memo((props: GoBackButtonProps) => {
  const { className, text } = props
  const { t } = useTranslation()

  const clsGoBackButton = classNames(cls.goBackButton, [className], {})
  return (
    <LinkApp className={clsGoBackButton} to={RoutePath.articleFeed}>
      {t(text)}
    </LinkApp>
  )
})
