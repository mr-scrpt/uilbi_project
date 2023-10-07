import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { LinkApp } from 'shared/component/LinkApp'
import { RoutePath } from 'shared/config/configRouter/configRouter'
import { classNames } from 'shared/lib/classNames'

import { GoEditArticleButtonProps } from '../type/props.type'
import cls from './GoEditArticleButton.module.scss'

export const GoEditArticleButton = memo((props: GoEditArticleButtonProps) => {
  const { className, text, slug } = props

  const clsGoEditArticleButton = classNames(
    cls.goEditArticleButton,
    [className],
    {}
  )
  const { t } = useTranslation()

  const to = `${RoutePath.article}${slug}/edit`
  return (
    <LinkApp className={clsGoEditArticleButton} to={to}>
      {t(text)}
    </LinkApp>
  )
})
