import { memo } from 'react'
import { LinkApp } from '@/shared/component/LinkApp'
import { Title, TitleSizeEnum } from '@/shared/component/Title'
import { classNames } from '@/shared/lib/classNames'

import { NotificationItemProps } from '../../type/props.type'
import cls from './NotificationItem.module.scss'

export const NotificationItem = memo((props: NotificationItemProps) => {
  const { className, data } = props

  const clsNotification = classNames(cls.notification, [className], {})

  const paragraph = <p className={cls.paragraph}>{data.description}</p>

  return (
    <div className={clsNotification}>
      <div className={cls.inner}>
        <Title size={TitleSizeEnum.S} className={cls.title} inverted>
          {data.title}
        </Title>
        {data.href ? <LinkApp to={data.href}>{paragraph}</LinkApp> : paragraph}
      </div>
    </div>
  )
})
