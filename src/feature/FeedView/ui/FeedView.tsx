import { memo } from 'react'
import { Button, ButtonViewEnum } from '@/shared/component/Button'
import { classNames } from '@/shared/lib/classNames'

import { FeedViewProps } from '../type/props.type'
import cls from './FeedView.module.scss'

export const FeedView = memo((props: FeedViewProps) => {
  const { className, changeView, view } = props

  const clsFeedView = classNames(cls.feedView, [className], {})

  const clsIcon = (isActive: boolean) =>
    classNames(cls.icon, [], {
      [cls.icon_active]: isActive,
    })

  return (
    <div className={clsFeedView}>
      <div className={cls.inner}>
        {view.map((item) => (
          <Button
            key={item.view}
            view={ButtonViewEnum.TRANSPARENT}
            icon={item.icon}
            classIcon={clsIcon(item.isActive)}
            onClick={() => changeView(item.view)}
          />
        ))}
      </div>
    </div>
  )
})
